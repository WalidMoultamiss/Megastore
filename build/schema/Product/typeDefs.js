"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    input ProductInput {
        name: String
        description: String
        image: [String]
        price: String
        storeId: ID
        categoryIds: [ID]
        stock: String
        promoPrice: String
        quantity: String
    }

    input pagination {
        cursor: Int
        limit: Int
    }

    input ProductStoreInput {
        storeId: ID
        productIds: [ID]
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: [String]!
        price: String!
        promoPrice: String!
        storeId: Store!
        categoryIds: [Category]!
        stock: String!
        status: String!
        createdAt: String!
        uuid: String!
        viewed: Int!
        quantity: String!
    }

    type Query {
        getAllProducts: [Product]
        getProductById(id: ID!): Product
        getProductByUuid(uuid: String!): Product
        getAllProductsWithPagination(inputs: pagination): [Product]
    }

    type Mutation {
        addProductToStore(input: ProductStoreInput): Store
        createProduct(input: ProductInput): Product
        updateProduct(id: ID!, input: ProductInput): Product
        deleteProduct(id: ID!): Product
        addViewed(id: ID!): Product
    }

    type Subscription {
        productAdded: Product
        productUpdated: Product
        productDeleted: Product
        productViewed: Product
    }
`;
//# sourceMappingURL=typeDefs.js.map