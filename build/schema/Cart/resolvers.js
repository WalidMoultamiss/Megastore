"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        // // @ts-ignore
        getAllCarts: () => {
            return index_1.Cart.find();
        },
    },
    Mutation: {
        // @ts-ignore
        createCart: (root, args, context, info) => {
            return index_1.Cart.create(args);
        }
    },
    Cart: {
        userId: (root, args, context, info) => {
            return index_1.User.findById(root.userId);
        },
        orderIds: (root, args, context, info) => {
            return index_1.Order.find({ _id: { $in: root.orderIds } });
        }
    }
};
//# sourceMappingURL=resolvers.js.map