"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const enums_1 = require("../ts/enums");
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const schema = new mongoose_1.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    token: { type: String },
    store: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Store' },
    role: {
        type: String,
        enum: enums_1.Role,
        default: enums_1.Role.USER,
    },
    createdAt: { type: Date, default: Date.now },
});
// 3. Create a Model.
exports.User = (0, mongoose_1.model)("User", schema);
//# sourceMappingURL=User.js.map