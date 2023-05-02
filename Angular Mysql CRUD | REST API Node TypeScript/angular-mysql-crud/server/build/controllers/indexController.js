"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /api/game' });
    }
    ;
}
exports.indexController = new IndexController(); // Exportar la clase completa
