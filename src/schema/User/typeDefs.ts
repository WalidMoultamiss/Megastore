import { gql } from 'apollo-server-express';




// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: String!
  updatedAt: String!
}

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
`;
