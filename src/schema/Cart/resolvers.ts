import type { Resolvers } from "@generated/types";
import { ICategory, Category, Product, Order, Cart , User} from "@models/index";

export const resolvers: Resolvers = {
  Query: {
    // // @ts-ignore
    getAllCarts: (): any => {
      return Cart.find();
    },
  },
  Mutation: {
    // @ts-ignore
    createCart: (root, args, context, info): any => {
      return Cart.create(args);
    }
  },
  Cart: {
    userId: (root, args, context, info): any => {
      return User.findById(root.userId);
    },
    orderIds: (root, args, context, info): any => {
      return Order.find({ _id: { $in: root.orderIds } });
    }
  }
};
