import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
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
