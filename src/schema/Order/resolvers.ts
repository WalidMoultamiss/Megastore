import type { Resolvers } from "@generated/types";
import { IOrder, Category, Product, Order
} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllOrders:(): any => {
      return Order.find();
    },
    getOrderById: (_: any, { id }: { id: string }): any => Order.findById(id),
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
  
};