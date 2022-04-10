"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
exports.resolvers = {
    Query: {
        // @ts-ignore
        getAllSubAdmins: async () => await index_1.SubAdmin.find(),
    },
    Mutation: {
        //@ts-ignore
        registerSubAdmin: async (_, { input }) => {
            const { firstName, lastName, email, password } = input;
            const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
            const subAdmin = new index_1.SubAdmin({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });
            const token = (0, jsonwebtoken_1.sign)({ SubAdminId: subAdmin.id }, "secret", {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            subAdmin.token = token;
            let AyoCheck = await subAdmin.save();
            return subAdmin;
        },
        //@ts-ignore
        login: async (_, { input }) => {
            const { email, password } = input;
            const subAdmin = await index_1.SubAdmin.findOne({ email });
            if (!subAdmin) {
                throw new Error("SubAdmin not found");
            }
            const isValid = await (0, bcrypt_1.compare)(password, subAdmin.password);
            if (!isValid) {
                throw new Error("Invalid password");
            }
            const token = (0, jsonwebtoken_1.sign)({ SubAdminId: subAdmin.id }, "secret", {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            subAdmin.token = token;
            return subAdmin;
        },
        //@ts-ignore
        createAdmin: async (_, { input }) => {
            const { firstName, lastName, email, password } = input;
            const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
            const subAdmin = new index_1.SubAdmin({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });
            const token = (0, jsonwebtoken_1.sign)({ SubAdminId: subAdmin.id }, "secret", {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            subAdmin.token = token;
            let AyoCheck = await subAdmin.save();
            return subAdmin;
        },
    },
};
//# sourceMappingURL=resolvers.js.map