import {gql} from 'apollo-server-express';
import {IStatus} from '@ts/enums';

export const typeDefs = gql`
    input StoreInput {
        name: String
        address: String
        phone: String
        description: String
        image: String
        userId: ID
        productIds: [ID]
    }

    type Store {
        id: ID!
        name: String!
        address: String!
        phone: String!
        description: String!
        image: String!
        userId: User!
        productIds: [Product]!
        options: StoreOptions!
    }

    type Query {
        getAllStores: [Store]
        getStoreById(id: ID!): Store
    }

    type Mutation {
        createStore(input: StoreInput): Store
        updateStore(id: ID!, input: StoreInput): Store
        deleteStore(id: ID!): Store
    }
`;