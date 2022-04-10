"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
exports.resolvers = {
    Query: {
        getAllAdmins: async () => await index_1.Admin.find(),
    },
    Mutation: {
        //@ts-ignore
        registerAdmin: async (_, { input }) => {
            const { firstName, lastName, email, password } = input;
            const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
            const admin = new index_1.Admin({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });
            const token = (0, jsonwebtoken_1.sign)({ AdminId: admin.id }, "secret", {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            admin.token = token;
            let AyoCheck = await admin.save();
            return admin;
        },
        //@ts-ignore
        login: async (_, { input }) => {
            const { email, password } = input;
            const admin = await index_1.Admin.findOne({ email });
            if (!admin) {
                throw new Error("Admin not found");
            }
            const isValid = await (0, bcrypt_1.compare)(password, admin.password);
            if (!isValid) {
                throw new Error("Invalid password");
            }
            const token = (0, jsonwebtoken_1.sign)({ AdminId: admin.id }, "secret", {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            admin.token = token;
            return admin;
        },
    },
};
//# sourceMappingURL=resolvers.js.map