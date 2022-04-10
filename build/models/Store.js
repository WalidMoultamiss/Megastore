"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const mongoose_1 = require("mongoose");
const StoreSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: String, required: true },
    productIds: { type: [String] },
    options: { type: String }
});
exports.Store = (0, mongoose_1.model)("Store", StoreSchema);
// Store.collection.dropIndexes();
//# sourceMappingURL=Store.js.map