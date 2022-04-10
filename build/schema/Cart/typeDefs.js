"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    input CartInput {
        userId: ID!
        orderIds: [ID]
    }


    type Cart {
        id: ID!
        userId: User!
        orderIds: [Order]!
    }

    type Query {
        getAllCarts: [Cart]
        getCartById(id: ID): Cart
        getLastCartByUserId(id: ID!): Cart
    }

    type Mutation {
        createCart(input: CartInput): Cart
    }
`;
//# sourceMappingURL=typeDefs.js.map