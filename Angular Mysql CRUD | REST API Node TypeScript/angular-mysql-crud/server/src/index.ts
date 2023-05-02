import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

//const bp = require('body-parser');
import morgan from 'morgan';
import cors from 'cors';

    // cors definitions
    const corsOptions={
        origin:`http://${process.env.PORT}:3001`,
        credentials:true,
        optionSuccessStatus:200
    }
// iniciará el servidor
class Server{

    public app: Application;
    // constructor que se ejecuta apenas se inicia la clase
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    // Encargado de configurar la propiedad app.
    config():void{
        this.app.set('port',process.env.PORT || 3001);
        this.app.use(morgan('dev'));
    }


    // Definir de app , las rutas de mi servidor
    routes(): void{
        this.app.use(express.json()) // Aceptar formatos json en clientes. Agregar nuestros datos en un objeto de req.body
        this.app.use(express.urlencoded({extended:false}));
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
        this.app.use(cors(corsOptions));
        //this.app.use(bp.json());
        //this.app.use(bp.urlencoded({extended:false}));
    }

    // Inicializar el servidor
    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log(`Server on port `, this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();

