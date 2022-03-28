import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    input OrderInput {
        userId: ID
        productId: ID
        quantity: String
    }

    type Order {
        id: ID
        userId: ID
        productId: ID
        quantity: String
    }

    type Query {
        getAllOrders: [Order]
        getOrderById(id: ID!): Order
        getLastOrderByUserId(id: ID!): Order
    }

    type Mutation {
        createOrder(input: OrderInput): Order
        updateOrder(input: OrderInput): Order
        addOrderToOrder(input: OrderInput): Order
    }
`;