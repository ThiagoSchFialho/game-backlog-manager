import { Games } from "../../entities/games";

export interface CreateGameInput {
    title: string;
    steam_id: number;
    developer: string;
    release_date: string;
    playtime: number;
    status: string;
    cover_square?: string | undefined;
    cover_hero?: string | undefined;
    cover_grid?: string | undefined;
    personal_rating?: number | undefined;
}

export interface UpdateGameInput extends Partial<CreateGameInput> {}

export interface IGamesModel {
    createGame(input: CreateGameInput): Promise<Games>;
    getGameById(id: number): Promise<Games | undefined>;
    getGameBySteamId(steam_id: number): Promise<Games | undefined>;
    getAllGames(): Promise<Games[]>;
    updateGame(id: number, input: UpdateGameInput): Promise<Games | undefined>;
    deleteGame(id: number): Promise<Games | undefined>;
}