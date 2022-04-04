import { bootstrap } from '@config/apollo';
import { permissions } from '@middlewares/permission';
import { schema as gql } from '@schema/index';
import { applyMiddleware } from 'graphql-middleware';


const schema = applyMiddleware(gql, permissions);

bootstrap(schema);
