"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=typeDefs.js.map