"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    index: {
        type: String
    },
    type_st: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    web: {
        type: String
    },
    title: {
        type: String
    },
    cabinet: {
        type: String
    },
    changePass: {
        type: Number
    },
    status: {
        type: Number
    },
    type: {
        type: String
    }
});
exports.default = mongoose_1.default.model('User', User, 'users');
//# sourceMappingURL=user.js.map