import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis, { RedisOptions } from 'ioredis';

const { REDIS_DOMAIN_NAME, REDIS_PORT_NUMBER, REDIS_PASSWORD } = process.env;

const options: RedisOptions = {
  host: "redis-11037.c11.us-east-1-3.ec2.cloud.redislabs.com",
  port: 11037,
  password: "kol8ARhEXz9El4VerE8pW6kH3Lgk7teH",
};

export const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options),
});