import {gql} from 'apollo-server-express';
import {IStatus} from '@ts/enums';

export const typeDefs = gql`
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