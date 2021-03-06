"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = exports.io = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const compression_1 = __importDefault(require("compression"));
const ioredis_1 = __importDefault(require("ioredis"));
const apollo_server_plugin_response_cache_1 = __importDefault(require("apollo-server-plugin-response-cache"));
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const pubsub_1 = require("./pubsub");
const socket_io_1 = require("socket.io");
const db_1 = require("./db");
const WebSocketServer_1 = require("./WebSocketServer");
const apollo_server_cache_redis_1 = require("apollo-server-cache-redis");
const redis_1 = require("./redis");
const body_parser_1 = __importDefault(require("body-parser"));
const port = process.env.PORT || 4000;
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
exports.io = new socket_io_1.Server(7300, {
    cors: {
        origin: "*",
        credentials: true,
    },
    allowEIO3: true,
    pingInterval: 10000,
});
const bootstrap = async (schema) => {
    // Create an Express app and HTTP server; we will attach both the WebSocket
    // server and the ApolloServer to this HTTP server.
    app.use((0, cors_1.default)());
    app.use((0, compression_1.default)());
    app.use(body_parser_1.default.json({
        limit: '50mb'
    }));
    // Create the Web Socket instance, using the schema we created earlier
    const serverCleanup = (0, WebSocketServer_1.WebSocket)(httpServer, schema);
    // Set up ApolloServer.
    const server = new apollo_server_express_1.ApolloServer({
        introspection: true,
        context: async ({ req }) => {
            return {
                req,
                io: exports.io,
                // @ts-ignore
                pubsub: pubsub_1.pubsub,
            };
        },
        schema,
        cache: new apollo_server_cache_redis_1.BaseRedisCache({
            //@ts-ignore
            client: new ioredis_1.default(redis_1.RedisOptions),
        }),
        plugins: [
            (0, apollo_server_plugin_response_cache_1.default)(),
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
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
        validationRules: [(0, graphql_depth_limit_1.default)(7)],
        formatError: (error) => {
            // Remove the internal database error message
            return error;
        },
    });
    await server.start();
    server.applyMiddleware({ app, path: '/gql', cors: { origin: 'http://localhost:3002/*' } });
    // Now that our HTTP server is fully set up, we can listen to it.
    httpServer.listen(port, async () => {
        console.log(`???? Server ready at: ${port}${server.graphqlPath}`);
        const { connection } = await (0, db_1.db)();
        // connect to database
        console.log(`???? Connected to database successfully: ${connection.name}`);
    });
};
exports.bootstrap = bootstrap;
//# sourceMappingURL=apollo.js.map