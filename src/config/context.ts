import { Request } from 'express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { pubsub } from './pubsub';
export interface Context {
  req: Request;
  pubsub: RedisPubSub;
  io: any;
}







// io.on('connection', (socket) => {
//   console.log('a user connected');
// });



// export const context = async ({ req }: { req: Request }): Promise<Context> => {


//   return {
//     req,
//     io,
//     // @ts-ignore
//     pubsub,
//   };
// };
