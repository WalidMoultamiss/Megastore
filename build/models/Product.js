"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String], required: false, default: [] },
    uuid: { type: String, required: false },
    price: { type: String, required: true },
    storeId: { type: String, required: true },
    categoryIds: { type: [String] },
    quantity: { type: String },
    stock: { type: String, required: true },
    promoPrice: { type: String, required: false },
    status: { type: String, default: "ACTIVE" },
    createdAt: { type: String, default: '' + Date.now() },
    viewed: { type: Number, default: 0 }
});
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);
//# sourceMappingURL=Product.js.map