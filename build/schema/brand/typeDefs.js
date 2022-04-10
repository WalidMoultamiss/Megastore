"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    input BrandInput {
        name: String
        description: String
        image: String
        productIds: [ID]
    }

    input BrandProductInput {
        brandId: ID
        productIds: [ID]
    }

    type Brand {
        id: ID!
        name: String!
        description: String!
        image: String!
        productIds: [Product]!
    }

    type Query {
        getAllBrands: [Brand]
        getBrandById(id: ID!): Brand
    }

    type Mutation {
        createBrand(input: BrandInput): Brand
        updatebrand(id: ID!, input: BrandInput): Brand
        addBrandToProduct( input: BrandProductInput): Product
        
    }
`;
//# sourceMappingURL=typeDefs.js.map