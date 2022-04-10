"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  input CategoryInput {
    name: String
    description: String
    image: String
    productIds: [ID]
  }

  input CategoryProductInput {
    categoryId: [ID]
    productIds: ID
  }

  input ProductCategoryInput {
    categoryId: ID
    productIds: [ID]
  }

  input CategoryInput {
    categoryId: ID
    productIds: [ID]
  }

  type Category {
    id: ID!
    name: String!
    description: String!
    image: String!
    productIds: [Product]!
  }

  type Query {
    getAllCategories: [Category]
    getCategoryById(id: ID!): Category
  }

  type Mutation {
    createCategory(input: CategoryInput): Category
    updateCategory(id: ID!, input: CategoryInput): Category
    addCategoryToProduct(input: CategoryProductInput): Product
    addProductToCategory(input: ProductCategoryInput): Store
  }
`;
//# sourceMappingURL=typeDefs.js.map