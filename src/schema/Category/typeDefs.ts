import {gql} from 'apollo-server-express';
import {IStatus} from '@ts/enums';

export const typeDefs = gql`
    input CategoryInput {
        name: String
        description: String
        image: String
        productIds: [ID]
    }


 
    input CategoryProductInput {
        categoryId: ID
        productIds: [ID]
    }

    type Category {
        id: ID
        name: String
        description: String
        image: String
        productIds: [Product]
    }

    type Query {
        getAllCategories: [Category]
        getCategoryById(id: ID!): Category
    }

    type Mutation {
        createCategory(input: CategoryInput): Category
        updateCategory(id: ID!, input: CategoryInput): Category
        addCategoryToProduct( input: CategoryProductInput): Product
        addProductToCategory(input: CategoryProductInput): Store
    }
`;