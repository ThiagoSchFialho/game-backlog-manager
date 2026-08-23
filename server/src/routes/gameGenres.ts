import express, { Request, Response } from 'express';
import { GameGenresModel } from '../models/gameGenres.model';

const gameGenresModel = new GameGenresModel();

const router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    return res.status(500).json({ error: "Not implemented." });
});


export default router;