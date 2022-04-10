"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Super = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../ts/enums");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: enums_1.Status,
        default: "ACTIVE",
    }
}, { timestamps: true });
exports.Super = (0, mongoose_1.model)("Super", schema);
//# sourceMappingURL=Super.js.map