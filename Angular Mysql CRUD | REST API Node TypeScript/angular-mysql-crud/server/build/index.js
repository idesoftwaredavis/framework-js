"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
//const bp = require('body-parser');
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// cors definitions
const corsOptions = {
    origin: `http://${process.env.PORT}:3001`,
    credentials: true,
    optionSuccessStatus: 200
};
// iniciará el servidor
class Server {
    // constructor que se ejecuta apenas se inicia la clase
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    // Encargado de configurar la propiedad app.
    config() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use((0, morgan_1.default)('dev'));
    }
    // Definir de app , las rutas de mi servidor
    routes() {
        this.app.use(express_1.default.json()); // Aceptar formatos json en clientes. Agregar nuestros datos en un objeto de req.body
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use((0, cors_1.default)(corsOptions));
        //this.app.use(bp.json());
        //this.app.use(bp.urlencoded({extended:false}));
    }
    // Inicializar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port `, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
