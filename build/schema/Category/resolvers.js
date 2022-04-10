"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        getAllCategories: () => {
            return index_1.Category.find();
        },
    },
    Mutation: {
        //@ts-ignore
        createCategory: async (_, { input }) => {
            const category = new index_1.Category({
                ...input,
            });
            let chiData = await category.save();
            return chiData;
        },
        //@ts-ignore
        updateCategory: async (_, { input }) => {
            const category = await index_1.Category.findByIdAndUpdate(input.id, {
                ...input,
            }, { new: true });
            return category;
        },
        //@ts-ignore
        addCategoryToProduct: async (_, { input }) => {
            const { productIds, categoryIds } = input;
            const product = await index_1.Product.findById(productIds);
            if (!product) {
                throw new Error("Product not found");
            }
            product.categoryIds.push(categoryIds);
            let chiData = await product.save();
            return chiData;
        },
        //@ts-ignore
        addProductToCategory: async (_, { input }) => {
            const { categoryIds, productIds } = input;
            const category = await index_1.Category.findById(categoryIds);
            if (!category) {
                throw new Error("Category not found");
            }
            category.productIds.push(...productIds);
            let chiData = await category.save();
            return chiData;
        }
    },
    Category: {
        productIds: async ({ productIds }) => {
            return await index_1.Product.find({ _id: { $in: productIds } });
        },
    },
};
//# sourceMappingURL=resolvers.js.map