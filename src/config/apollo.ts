import express from 'express';
import cors from 'cors';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import Redis from 'ioredis';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { Request } from 'express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { pubsub } from './pubsub';
import {Server} from 'socket.io'

export const io = new Server(7300 , {
  cors: {
    origin: "*",
    credentials: true,
  },
  allowEIO3: true,
  pingInterval: 10000,
})

// import { context } from './context';
import { GraphQLSchema } from 'graphql';
import { db } from './db';
import { WebSocket } from './WebSocketServer';
import { BaseRedisCache } from 'apollo-server-cache-redis';
import { RedisOptions } from './redis';
import bodyParser from 'body-parser';

const port = process.env.PORT || 4000;
const app = express();
const httpServer = createServer(app);


export interface Context {
  req: Request;
  pubsub: RedisPubSub;
  io: any;
}





export const bootstrap = async (schema: GraphQLSchema) => {
  // Create an Express app and HTTP server; we will attach both the WebSocket
  // server and the ApolloServer to this HTTP server.

  app.use(cors());
  app.use(compression());
  app.use(bodyParser.json({
    limit: '50mb'
  }));


  // Create the Web Socket instance, using the schema we created earlier
  const serverCleanup = WebSocket(httpServer, schema);

  // Set up ApolloServer.
  const server = new ApolloServer({
    introspection: true,
    context: async ({ req }: { req: Request }): Promise<Context> => {


      return {
        req,
        io,
        // @ts-ignore
        pubsub,
      };
    },
    schema,
    cache: new BaseRedisCache({
      //@ts-ignore
      client: new Redis(RedisOptions),
    }),
    plugins: [
      responseCachePlugin(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
    validationRules: [depthLimit(7)],
    formatError: (error: any) => {
      // Remove the internal database error message
      return error;
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: '/gql', cors: { origin: '*' } });

  // Now that our HTTP server is fully set up, we can listen to it.
  httpServer.listen(port, async () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    const { connection } = await db();
    // connect to database
    console.log(`👋 Connected to database successfully: ${connection.name}`);
  });
};