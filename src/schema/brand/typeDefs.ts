import {gql} from 'apollo-server-express';
import {IStatus} from '@ts/enums';

export const typeDefs = gql`
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