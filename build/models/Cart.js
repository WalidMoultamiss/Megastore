"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    orderIds: [{ type: String }],
});
exports.Cart = (0, mongoose_1.model)("Cart", CartSchema);
//# sourceMappingURL=Cart.js.map