"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const mongoose_1 = require("mongoose");
const BrandSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    productIds: [{ type: String }],
});
exports.Brand = (0, mongoose_1.model)("Brand", BrandSchema);
//# sourceMappingURL=brand.js.map