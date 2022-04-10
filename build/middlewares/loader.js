"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
// create a dataloader for the given model
const createLoader = (Model) => {
    const loader = new dataloader_1.default(async (keys) => {
        const data = await Model.find({ _id: { $in: keys } });
        return keys.map((key) => data.filter(({ id }) => id === key));
    });
    return {
        load: async (id) => loader.load(id),
    };
};
exports.createLoader = createLoader;
//# sourceMappingURL=loader.js.map