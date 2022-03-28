import type { Resolvers } from "@generated/types";
import { IOrder, Category, Product, Order
} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllOrders:(): any => {
      return Order.find();
    },
  },
  Mutation:{
    //@ts-ignore
    createOrder: async (_: any, { input }: { input: IOrder }) => {
      const order = new Order({
        ...input,
      });
      let chiData = await order.save();
      return chiData;
    },
  },
  Order:{
    // @ts-ignore
    productId: async ({ productId }) => {
      console.log(productId);
      
      return await Product.findById(productId);
    },
  }
};
