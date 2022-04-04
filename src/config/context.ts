import { Request } from 'express';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { pubsub } from './pubsub';
export interface Context {
  req: Request;
  pubsub: RedisPubSub;
}

export const context = async ({ req }: { req: Request }): Promise<Context> => {
  return {
    req,
    // @ts-ignore
    pubsub,
  };
};
