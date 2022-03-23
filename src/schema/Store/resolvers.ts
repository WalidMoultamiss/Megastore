import type { Resolvers } from "@generated/types";
import { Store, IStore, User ,Product } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    getAllStores: (): any => {
      return Store.find();
    },
    getStoreById: (_: any, { id }: { id: string }): any => Store.findById(id),
  },
  Mutation: {
      //@ts-ignore
    createStore: async (_: any, { input }: { input: IStore }) => {
      const store = new Store({
        ...input,
      });
      let chiData = await store.save();
      return chiData;
    },
  },
  Store: {
    userId: async ({ userId }) => {
      return await User.findById(userId);
    },
    productIds: async ({ productIds }) => {
      return await Product.find({ _id: { $in: productIds } });
    },
  },
};
