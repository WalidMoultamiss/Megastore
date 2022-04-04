import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    input StoreOptionsInput {
        slider: Boolean
        slider_image: [String]
        bestProducts: Boolean
        ourBrands: Boolean
        whatsapp: Boolean
        primaryColor: String
        bgColor: String
        storeId: String
        popup: Boolean
        popupImage: String
    }

    input addOptionToStore {
        storeId: String
        optionId: String
    }

    type StoreOptions {
        id: ID
        slider: Boolean
        slider_image: [String]
        bestProducts: Boolean
        ourBrands: Boolean
        whatsapp: Boolean
        popup: Boolean
        primaryColor: String
        bgColor: String
        storeId: String
        popupImage: String
    }

    type Query {
        getAllStoreOptions: [StoreOptions]
        getStoreOptionsById(id: ID!): StoreOptions
        getStoreOptionsByStoreId(id: ID!): StoreOptions
    }

    type Mutation {
        createStoreOptions(input: StoreOptionsInput): StoreOptions
        updateStoreOptions(id: ID!, input: StoreOptionsInput): StoreOptions
        deleteStoreOptions(id: ID!): StoreOptions
        addStoreOptionToStore(input: addOptionToStore): StoreOptions
    }
`;