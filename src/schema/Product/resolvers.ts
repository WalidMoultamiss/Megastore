import { pubsub } from "@config/pubsub";
import type { Resolvers } from "@generated/types";
import { Product, IProduct, Store, Category } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    getAllProducts: (): any => {
      return Product.find();
    },
    getProductById: (_: any, { id }: { id: string }): any =>
      Product.findById(id),
  },
  Mutation: {
    //@ts-ignore
    createProduct: async (_: any, { input }: { input: IProduct }) => {
      const uuid =
        input.name.toLowerCase().replace(/ /g, "-") +
        "-" +
        Math.random().toString(36).substring(2, 6);
      const product = new Product({
        ...input,
        uuid,
      });

      let chiData = await product.save();
      //add product id to store
      const store = await Store.findById(input.storeId);
      if (!store) {
        throw new Error("Store not found");
      }

      store.productIds.push(chiData.id);
      let newProduct = await store.save();

      pubsub.publish("productAdded", { productAdded: chiData });
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
    updateProduct: async (
      _: any,
      { id, input }: { id: string; input: IProduct }
    ) => {
      const product = await Product.findByIdAndUpdate(
        id,
        {
          ...input,
        },
        { new: true }
      );
      return product;
    },
  },
  Subscription: {
    productAdded: {
      subscribe: () => pubsub.asyncIterator("productAdded"),
    },
  },
  Product: {
    storeId: async ({ storeId }) => {
      return await Store.findById(storeId);
    },
    categoryIds: async ({ categoryIds }) => {
      return await Category.find({ _id: { $in: categoryIds } });
    },
  },
};
