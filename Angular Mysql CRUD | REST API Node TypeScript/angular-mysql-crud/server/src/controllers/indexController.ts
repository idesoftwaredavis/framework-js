import {Request, Response} from 'express';

class IndexController{

    public index(req:Request, res:Response){
        res.json({text: 'API Is /api/game'});
    };

}


export const indexController = new IndexController(); // Exportar la clase completa