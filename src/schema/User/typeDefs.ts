import { gql } from 'apollo-server-express';
import { Role } from '@ts/enums';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
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
    id: ID
    firstName: String
    lastName: String
    email: String
    role: Role
    password: String
    token: String
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
`;