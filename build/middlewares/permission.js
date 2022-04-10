"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.isAdmin = exports.isAuthenticated = void 0;
const graphql_shield_1 = require("graphql-shield");
exports.isAuthenticated = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    return ctx.user !== null;
});
exports.isAdmin = (0, graphql_shield_1.rule)({ cache: 'contextual' })(async (parent, args, ctx, info) => {
    return ctx.user.role === 'admin';
});
// Permissions
exports.permissions = (0, graphql_shield_1.shield)({
    Query: {
        hello: exports.isAuthenticated,
    },
}, {
    debug: process.env.NODE_ENV !== 'production',
});
//# sourceMappingURL=permission.js.map