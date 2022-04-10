"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
}, { timestamps: true });
// 3. Create a Model.
exports.Admin = (0, mongoose_1.model)("Admin", schema);
//# sourceMappingURL=Admin.js.map