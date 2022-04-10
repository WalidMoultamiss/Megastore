"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    productId: { type: String },
    quantity: { type: String, required: true }
});
exports.Order = (0, mongoose_1.model)("Order", OrderSchema);
//# sourceMappingURL=Order.js.map