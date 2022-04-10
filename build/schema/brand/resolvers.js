"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        //@ts-ignore
        getAllBrands: () => {
            return index_1.Brand.find();
        },
    },
    Mutation: {
        //@ts-ignore
        createBrand: async (_, { input }) => {
            const brand = new index_1.Brand({
                ...input,
            });
            let chiData = await brand.save();
            return chiData;
        },
        //@ts-ignore
        updatebrand: async (_, { input }) => {
            const brand = await index_1.Brand.findByIdAndUpdate(input.id, {
                ...input,
            }, { new: true });
            return index_1.Brand;
        },
        //@ts-ignore
        addBrandToProduct: async (_, { id, input }) => {
            const { BrandId, productIds } = input;
            const brand = await index_1.Brand.findById(BrandId);
            if (!brand) {
                throw new Error("Brand not found");
            }
            brand.productIds.push(...productIds);
            let chiData = await brand.save();
            return chiData;
        },
        //@ts-ignore
        /* addProductToBrand: async (_: any, { input }: { input: any }) => {
          const { BrandId, productIds } = input;
          const Brand = await Brand.findById(BrandId);
          if (!Brand) {
            throw new Error("Brand not found");
          }
          Brand.productIds.push(...productIds);
          let chiData = await Brand.save();
          return chiData;
        } */
    },
    /* Brand: {
      productIds: async ({ productIds }) => {
        return await Product.find({ _id: { $in: productIds } });
      },
    }, */
};
//# sourceMappingURL=resolvers.js.map