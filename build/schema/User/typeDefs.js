"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Construct a schema, using GraphQL schema language
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    role: Role
  }

  enum Role {
    USER
    SELLER
  }

  input LoginInput {
    email: String
    password: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: Role!
    password: String!
    token: String!
    store: Store!
    createdAt: String!
  }

  type Query {
    hello: String
    getAllUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    register(input: UserInput): User
    login(input: LoginInput): User
  }

  type Subscription {
    userLoggedIn: User
    userAdded: User
    userUpdated: User
    userDeleted: User
  }
`;
//# sourceMappingURL=typeDefs.js.map