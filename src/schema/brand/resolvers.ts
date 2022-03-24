import type { Resolvers } from "@generated/types";
import { IBrand, Brand, Product
} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllBrands: (): any => {
      return Brand.find();
    },
  },
  Mutation: {
    //@ts-ignore
    createBrand: async (_: any, { input }: { input: IBrand }) => {
      const brand = new Brand({
        ...input,
      });
      let chiData = await brand.save();
      return chiData;
    },
    //@ts-ignore
    updatebrand: async (_: any, { input }: { input: any }) => {
      const brand = await Brand.findByIdAndUpdate(input.id, {
        ...input,
      }, { new: true });
      return Brand;
    },
    //@ts-ignore
    addBrandToProduct: async (_: any, { id, input }: {input: any }) => {
      const { BrandId, productIds } = input;
      const brand = await Brand.findById(BrandId);
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
