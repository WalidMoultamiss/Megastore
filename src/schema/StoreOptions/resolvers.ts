import type { Resolvers } from "@generated/types";
import { Options, IOptions , Store , IStore } from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllStoreOptions: (): any => {
      return Options.find();
    },

    //@ts-ignore
    getStoreOptionsById: (_: any, { id }: { id: string }): any =>{
      Options.findById(id)
    },

    //@ts-ignore
    getStoreOptionsByStoreId: (_: any, { id }: { id: string }): any =>{
      Options.findOne({storeId: id})
    }
  },

  Mutation: {
    //@ts-ignore
    createStoreOptions: async (_: any, { input }: { input: IOptions }) => {
      const options = new Options({
        ...input,
      });
      let chiData = await options.save();
      const store = await Store.findById(input.storeId);
      if(store){
      store.options = chiData.id;
      await store.save();
      }
      return chiData;
    },
     //@ts-ignore
    addStoreOptionToStore: async (_: any, { input }: {
      input: {
        storeId: string,
        optionId: string
      }
    }) => {
      const store = await Store.findById(input.storeId);
      const option = await Options.findById(input.optionId);
      if(store && option){
        store.options = input.optionId;
        await store.save();
        return store;
      }
      return null;
    },

    //@ts-ignore
    updateStoreOptions: async (_: any, { id, input }: { id: string, input: IOptions }) => {
      const options = await Options.findByIdAndUpdate(id, input, { new: true });
      return options;
    },

    //@ts-ignore
    deleteStoreOptions: async (_: any, { id }: { id: string }): any => {
      const options = await Options.findByIdAndDelete(id);
      return options;
    }
  },
};
