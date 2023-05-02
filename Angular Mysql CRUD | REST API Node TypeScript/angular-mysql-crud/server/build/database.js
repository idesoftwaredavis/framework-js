"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const keys_1 = __importDefault(require("./keys"));
// hilo de conexion
const pool = promise_1.default.createPool(keys_1.default.database);
console.log("db is connected  ", pool);
exports.default = pool;
