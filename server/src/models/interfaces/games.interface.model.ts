import { Games } from "../../entities/games";

export interface CreateGameInput {
    title: string;
    steam_id: number;
    developer: string;
    release_date: string;
    playtime: number;
    status: string;
    cover_square?: string;
    cover_hero?: string;
    cover_grid?: string;
    personal_rating?: number;
}

export interface UpdateGameInput extends Partial<CreateGameInput> {}

export interface IGamesModel {
    createGame(input: CreateGameInput): Promise<Games>;
    getGameById(id: number): Promise<Games | undefined>;
    getGameBySteamId(steamId: number): Promise<Games | undefined>;
    getAllGames(): Promise<Games[]>;
    updateGame(id: number, input: UpdateGameInput): Promise<Games | undefined>;
    deleteGame(id: number): Promise<Games | undefined>;
}