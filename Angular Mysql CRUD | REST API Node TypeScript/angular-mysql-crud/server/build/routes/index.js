"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// metodo que devuelve un objeto donde colocar las rutas
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
