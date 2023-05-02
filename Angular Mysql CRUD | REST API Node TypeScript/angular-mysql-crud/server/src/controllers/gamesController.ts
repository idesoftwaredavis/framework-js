import {Request, Response} from 'express';


import pool from '../database';

class GamesController{

    public async list(req:Request, res:Response){
         const games = await pool.query('SELECT * FROM games');
        res.json(games[0]);
    }

    public async getOne(req: Request, res: Response){
        const { id } = req.params; // destructuring -> obtener una parte de un objeto
        const getGame = await pool.query('SELECT * FROM games WHERE id=?', [id]);
        if(getGame.length>0){
            return res.json(getGame[0]);
        }
        return res.status(404).json({text:'The game doesnt exist'});
    }
    
    public  async create(req: Request, res: Response){
        
        const [prueba] = await pool.query('INSERT INTO games(title,descripcion,imagen) VALUES(?,?,?)',[
            req.body.title,
            req.body.descripcion,
            req.body.imagen
        ]);
        res.json({message:'game saved'});
    }
    public async delete(req: Request, res: Response){
        const { id } = req.params;
        const deleteGame = await pool.query('DELETE FROM games WHERE id', [id]); 
        res.json('deleted game correctly');
    }
    public async update(req: Request, res: Response){
        const { id } = req.params;
        const updateGame = await pool.query('UPDATE games SET ? WHERE id=?',[req.body, id]);
        res.json({message:'updated game : ', updateGame});
    }
}

const gamesController = new GamesController();

export default gamesController;