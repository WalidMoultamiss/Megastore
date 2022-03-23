import type { Resolvers } from "@generated/types";
import { Product, IProduct, Store } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    getAllProducts: (): any => {
      return Product.find();
    }
  },
  Mutation: {
    //@ts-ignore
    createProduct: async (_: any, { input }: { input: IProduct }) => {
      const product = new Product({
        ...input,
      });
      let chiData = await product.save();
      return chiData;
    },
    //@ts-ignore
    addProductToStore: async (_: any, { input }: { input: any }) => {
      const { storeId, productIds } = input;
      const store = await Store.findById(storeId);
      if (!store) {
        throw new Error("Store not found");
      }
      store.productIds.push(...productIds);
      let chiData = await store.save();
      return chiData;
    },
    //@ts-ignore
    updateProduct: async (_: any, { id, input }: { id: string, input: IProduct }) => {
      const product = await Product.findByIdAndUpdate(id, {
        ...input,
      }, { new: true });
      return product;
    }
  },
  Product: {
    storeId: async ({ storeId }) => {
      return await Store.findById(storeId);
    }
  }
};
