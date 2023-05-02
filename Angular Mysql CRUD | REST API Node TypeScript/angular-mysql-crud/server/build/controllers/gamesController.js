"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json(games[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // destructuring -> obtener una parte de un objeto
            const getGame = yield database_1.default.query('SELECT * FROM games WHERE id=?', [id]);
            if (getGame.length > 0) {
                return res.json(getGame[0]);
            }
            return res.status(404).json({ text: 'The game doesnt exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [prueba] = yield database_1.default.query('INSERT INTO games(title,descripcion,imagen) VALUES(?,?,?)', [
                req.body.title,
                req.body.descripcion,
                req.body.imagen
            ]);
            res.json({ message: 'game saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteGame = yield database_1.default.query('DELETE FROM games WHERE id', [id]);
            res.json('deleted game correctly');
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updateGame = yield database_1.default.query('UPDATE games SET ? WHERE id=?', [req.body, id]);
            res.json({ message: 'updated game : ', updateGame });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
