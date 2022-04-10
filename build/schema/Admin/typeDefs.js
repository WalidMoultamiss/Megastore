"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input AdminInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Admin {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    token: String
  }

  type Query {
    getAllAdmins: [Admin]!
    getAdminById(id: ID!): Admin
  }

  type Mutation {
    registerAdmin(input: AdminInput): Admin
    loginAdmin(input: LoginInput): Admin
  }
`;
//# sourceMappingURL=typeDefs.js.map