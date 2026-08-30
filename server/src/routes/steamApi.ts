import express, { Request, Response } from 'express';
import { CreateGameInput } from "../models/interfaces/games.interface.model";
import { GamesModel } from '../models/games.model';
import { UsersModel } from '../models/users.model';

const router = express.Router();
const userModel = new UsersModel();
const gamesModel = new GamesModel();

async function fetchAppDetails(appid: number) {
    try {
        const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
        if (!res.ok) return null;

        const json = await res.json();
        const entry = json[String(appid)];

        if (!entry?.success || !entry.data) return null;

        return {
            developer: entry.data.developers?.[0] ?? null,
            release_date: entry.data.release_date?.date || null,
            cover_hero: entry.data.header_image ?? null,
        };
    } catch (error) {
        console.error(`Erro ao buscar appdetails de ${appid}:`, error);
        return null;
    }
}

function getStatus(playtime: number): string {
    return playtime > 0 ? "played" : "not-played";
}

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

router.get('/games-from-user', async function (req: Request, res: Response) {
    try {
        const user = await userModel.getUser();

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${user.steam_api_key}&steamid=${user.steam_id}&include_appinfo=true&include_played_free_games=true`;

        const steamRes = await fetch(url);

        if (!steamRes.ok) {
          console.error(`Steam API respondeu ${steamRes.status}`);
            return res.status(502).json({ error: "Erro ao consultar a API da Steam." });
        }

        const data = await steamRes.json();
        const steamGames = data.response.games ?? [];

        if (!steamGames.length) {
            return res.status(200).json([]);
        }

        const BATCH_SIZE = 5;
        const BATCH_DELAY_MS = 1000;
        const savedGames = [];

        for (let i = 0; i < steamGames.length; i += BATCH_SIZE) {
            const batch = steamGames.slice(i, i + BATCH_SIZE);

            const batchResults = await Promise.all(
                batch.map(async (sg: any) => {
                    const gameCheck = await gamesModel.getGameBySteamId(sg.appid);

                    if (!gameCheck) {
                        const details = await fetchAppDetails(sg.appid);
    
                        const game: CreateGameInput = {
                            title: sg.name,
                            steam_id: sg.appid,
                            playtime: sg.playtime_forever,
                            status: getStatus(sg.playtime_forever),
                            developer: details?.developer ?? null,
                            release_date: details?.release_date ?? null,
                            cover_square: sg.img_icon_url
                                ? `https://media.steampowered.com/steamcommunity/public/images/apps/${sg.appid}/${sg.img_icon_url}.jpg`
                                : undefined,
                            cover_hero: details?.cover_hero ?? undefined,
                            cover_grid: undefined,
                            personal_rating: undefined,
                            favorite: false,
                        };
    
                        return gamesModel.createGame(game);
                    }
                    return gameCheck;
                })
            );

            savedGames.push(...batchResults);

            if (i + BATCH_SIZE < steamGames.length) {
                await delay(BATCH_DELAY_MS);
            }
        }

        return res.status(200).json(savedGames);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
});

export default router;