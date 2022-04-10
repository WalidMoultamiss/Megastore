"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        //@ts-ignore
        getAllStoreOptions: () => {
            return index_1.Options.find();
        },
        //@ts-ignore
        getStoreOptionsById: (_, { id }) => {
            index_1.Options.findById(id);
        },
        //@ts-ignore
        getStoreOptionsByStoreId: (_, { id }) => {
            index_1.Options.findOne({ storeId: id });
        }
    },
    Mutation: {
        //@ts-ignore
        createStoreOptions: async (_, { input }) => {
            const options = new index_1.Options({
                ...input,
            });
            let chiData = await options.save();
            const store = await index_1.Store.findById(input.storeId);
            if (store) {
                store.options = chiData.id;
                await store.save();
            }
            return chiData;
        },
        //@ts-ignore
        addStoreOptionToStore: async (_, { input }) => {
            const store = await index_1.Store.findById(input.storeId);
            const option = await index_1.Options.findById(input.optionId);
            if (store && option) {
                store.options = input.optionId;
                await store.save();
                return store;
            }
            return null;
        },
        //@ts-ignore
        updateStoreOptions: async (_, { id, input }) => {
            const options = await index_1.Options.findByIdAndUpdate(id, input, { new: true });
            return options;
        },
        //@ts-ignore
        deleteStoreOptions: async (_, { id }) => {
            const options = await index_1.Options.findByIdAndDelete(id);
            return options;
        }
    },
};
//# sourceMappingURL=resolvers.js.map