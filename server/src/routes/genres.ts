import express, { Request, Response } from 'express';
import { GenresModel } from '../models/genres.model';

const genresModel = new GenresModel();

const router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    return res.status(500).json({ error: "Not implemented." });
});


export default router;