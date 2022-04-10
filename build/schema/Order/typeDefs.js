"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    input OrderInput {
        userId: ID
        productId: ID
        quantity: String
    }

    type Order {
        id: ID!
        userId: User!
        productId: Product!
        quantity: String!
    }

    type Query {
        getAllOrders: [Order]
        getOrderById(id: ID!): Order
        getLastOrderByUserId(userId: ID!): Order
    }

    type Mutation {
        createOrder(input: OrderInput): Order
        updateOrder(input: OrderInput): Order
        addOrderToOrder(input: OrderInput): Order
    }
`;
//# sourceMappingURL=typeDefs.js.map