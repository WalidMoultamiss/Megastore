"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    productIds: [{ type: String }],
});
exports.Category = (0, mongoose_1.model)("Category", CategorySchema);
//# sourceMappingURL=Category.js.map