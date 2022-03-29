import { gql } from "apollo-server-express";

export const typeDefs = gql`
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
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    token: String
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
