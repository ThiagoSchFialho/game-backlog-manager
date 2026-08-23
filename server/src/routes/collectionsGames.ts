import express, { Request, Response } from 'express';
import { CollectionGamesModel } from '../models/collectionGames.model';

const collectionGamesModel = new CollectionGamesModel();

const router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    return res.status(500).json({ error: "Not implemented." });
});


export default router;