"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
exports.resolvers = {
    Query: {
        //@ts-ignore
        getAllOrders: () => {
            return index_1.Order.find();
        },
        getOrderById: (_, { id }) => index_1.Order.findById(id),
        getLastOrderByUserId: (_, { userId }) => index_1.Order.findOne({ userId: userId }).sort({ createdAt: -1 }),
    },
    Mutation: {
        //@ts-ignore
        createOrder: async (_, { input }) => {
            const order = new index_1.Order({
                ...input,
            });
            let chiData = await order.save();
            return chiData;
        },
    },
    Order: {
        productId: async ({ productId }) => {
            return await index_1.Product.findById(productId);
        },
        userId: async ({ userId }) => {
            return await index_1.User.findById(userId);
        }
    },
};
//# sourceMappingURL=resolvers.js.map