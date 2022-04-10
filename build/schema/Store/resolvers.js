"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        getAllStores: () => {
            return index_1.Store.find();
        },
        getStoreById: (_, { id }) => index_1.Store.findById(id),
    },
    Mutation: {
        //@ts-ignore
        createStore: async (_, { input }) => {
            const store = new index_1.Store({
                ...input,
            });
            let chiData = await store.save();
            return chiData;
        },
    },
    Store: {
        userId: async ({ userId }) => {
            return await index_1.User.findById(userId);
        },
        productIds: async ({ productIds }) => {
            return await index_1.Product.find({ _id: { $in: productIds } });
        },
        options: async ({ options }) => {
            return await index_1.Options.findById(options);
        }
    },
};
//# sourceMappingURL=resolvers.js.map