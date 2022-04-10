"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_1 = require("./config/apollo");
const permission_1 = require("./middlewares/permission");
const index_1 = require("./schema/index");
const graphql_middleware_1 = require("graphql-middleware");
const schema = (0, graphql_middleware_1.applyMiddleware)(index_1.schema, permission_1.permissions);
(0, apollo_1.bootstrap)(schema);
//# sourceMappingURL=main.js.map