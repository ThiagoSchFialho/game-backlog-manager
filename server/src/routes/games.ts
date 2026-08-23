import express, { Request, Response } from 'express';
import { GamesModel } from '../models/games.model';

const gamesModel = new GamesModel();
const router = express.Router();

router.get('/', async function (req: Request, res: Response) {
    const { id, steam_id } = req.query;

    try {
        if (id) {
            const game = await gamesModel.getGameById(Number(id));
            if (!game) {
                return res.status(404).json({ message: "Nenhum jogo encontrado." });
            }
            return res.status(200).json(game);
        }

        if (steam_id) {
            const game = await gamesModel.getGameBySteamId(Number(steam_id));
            if (!game) {
                return res.status(404).json({ message: "Nenhum jogo encontrado." });
            }
            return res.status(200).json(game);
        }

        const games = await gamesModel.getAllGames();
        if (!games) {
            return res.status(404).json({ message: "Nenhum jogo encontrado." });
        }
        return res.status(200).json(games);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
});

export default router;