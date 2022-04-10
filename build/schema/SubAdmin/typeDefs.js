"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input SubAdminInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  input createAdminInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type SubAdmin {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    token: String!
  }

  type Query {
    getAllSubAdmins: [SubAdmin]!
    getSubAdminById(id: ID!): SubAdmin
  }

  type Mutation {
    registerSubAdmin(input: SubAdminInput): SubAdmin
    loginSubAdmin(input: LoginInput): SubAdmin
    createAdmin(input: createAdminInput): SubAdmin
  }
`;
//# sourceMappingURL=typeDefs.js.map