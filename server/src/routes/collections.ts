import express, { Request, Response } from 'express';
import { CollectionsModel } from '../models/collections.model';

const collectionsModel = new CollectionsModel();

const router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    return res.status(500).json({ error: "Not implemented." });
});


export default router;