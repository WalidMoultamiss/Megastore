"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const mongoose_1 = require("mongoose");
const OptionSchema = new mongoose_1.Schema({
    slider: { type: Boolean, required: true, default: false },
    slider_image: { type: [String], required: true, default: [] },
    bestProducts: { type: Boolean, required: true, default: false },
    ourBrands: { type: Boolean, required: true, default: false },
    whatsapp: { type: Boolean, required: true, default: false },
    primaryColor: { type: String, required: true, default: "#0000ff" },
    bgColor: { type: String, required: true, default: "#ffffff" },
    storeId: { type: String, required: true, default: "" },
    popup: { type: Boolean, required: true, default: false },
    popupImage: { type: String, default: "" }
});
exports.Options = (0, mongoose_1.model)("Options", OptionSchema);
// Store.collection.dropIndexes();
//# sourceMappingURL=StoreOptions.js.map