import type { Resolvers } from "@generated/types";
import { IOrder, Category, Product, Order , User
} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    getAllOrders:(): any => {
      return Order.find();
    },
    getOrderById: (_: any, { id }: { id: string }): any => Order.findById(id),
    getLastOrderByUserId: (_: any, { userId }: { userId: string }): any => Order.findOne({userId: userId}).sort({createdAt: -1}),

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
  Order: {
    productId: async ({ productId }) => {
      return await Product.findById(productId);
    },
    userId: async ({ userId }) => {
      return await User.findById(userId);
    }

  },
};