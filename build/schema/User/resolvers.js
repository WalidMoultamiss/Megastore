"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const index_1 = require("../../models/index");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
exports.resolvers = {
    Query: {
        hello: () => "Hello world!",
        getAllUsers: () => index_1.User.find(),
    },
    Mutation: {
        //@ts-ignore
        register: async (_, { input }) => {
            const { firstName, lastName, email, password, role } = input;
            const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
            const user = new index_1.User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role,
            });
            const token = (0, jsonwebtoken_1.sign)({ userId: user.id, role: user.role }, "secret", {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            user.token = token;
            let AyoCheck = await user.save();
            return user;
        },
        //@ts-ignore
        login: async (_, { input }) => {
            const { email, password } = input;
            const user = await index_1.User.findOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            const isValid = await (0, bcrypt_1.compare)(password, user.password);
            if (!isValid) {
                throw new Error("Invalid password");
            }
            //get store
            const store = await index_1.Store.findOne({ userId: user.id });
            if (!store) {
                user.store = "not found";
            }
            else {
                user.store = store;
            }
            const token = (0, jsonwebtoken_1.sign)({ userId: user.id, role: user.role }, "secret", {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            //send socket
            user.token = token;
            return user;
        },
    },
    Subscription: {
        userLoggedIn: {
            subscribe: (_, __, { pubsub }) => {
                return pubsub.asyncIterator("userLoggedIn");
            },
        },
    },
};
//# sourceMappingURL=resolvers.js.map