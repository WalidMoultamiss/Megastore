"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        getAllProducts: () => {
            let products = index_1.Product.find();
            // filter by viewed number
            products = products.sort({ viewed: -1 });
            return products;
        },
        //@ts-ignore
        getAllProductsWithPagination: (_, { inputs }) => {
            return index_1.Product.find().limit(inputs.limit).skip(inputs.cursor);
        },
        //@ts-ignore
        getProductById: (_, { id }) => index_1.Product.findById(id),
        // @ts-ignore
        getProductByUuid: (_, { uuid }) => index_1.Product.findOne({ uuid }),
    },
    Mutation: {
        //@ts-ignore
        createProduct: async (_, { input }) => {
            // console.log(io);
            const uuid = input.name.toLowerCase().replace(/ /g, "-") +
                "-" +
                Math.random().toString(36).substring(2, 6);
            const product = new index_1.Product({
                ...input,
                uuid,
            });
            let chiData = await product.save();
            //add product id to store
            const store = await index_1.Store.findById(input.storeId);
            if (!store) {
                throw new Error("Store not found");
            }
            store.productIds.push(chiData.id);
            let newProduct = await store.save();
            const category = await index_1.Category.findById(input.categoryIds[0]);
            if (!category) {
                throw new Error("Category not found");
            }
            category.productIds.push(chiData.id);
            let newCategory = await category.save();
            return chiData;
        },
        // @ts-ignore
        addProductToStore: async (_, { input }) => {
            const { storeId, productIds } = input;
            const store = await index_1.Store.findById(storeId);
            if (!store) {
                throw new Error("Store not found");
            }
            store.productIds.push(...productIds);
            let chiData = await store.save();
            return chiData;
        },
        // @ts-ignore
        addViewed: async (_, { id }) => {
            const product = await index_1.Product.findById(id);
            if (!product) {
                throw new Error("Product not found");
            }
            product.viewed += 1;
            let chiData = await product.save();
            return chiData;
        },
        //@ts-ignore
        updateProduct: async (_, { id, input }) => {
            const product = await index_1.Product.findByIdAndUpdate(id, {
                ...input,
            }, { new: true });
            return product;
        },
        //@ts-ignore
        deleteProduct: async (_, { id }) => {
            const product = await index_1.Product.findByIdAndDelete(id);
            return product;
        }
    },
    Product: {
        storeId: async ({ storeId }) => {
            return await index_1.Store.findById(storeId);
        },
        categoryIds: async ({ categoryIds }) => {
            return await index_1.Category.find({ _id: { $in: categoryIds } });
        },
    },
};
//# sourceMappingURL=resolvers.js.map