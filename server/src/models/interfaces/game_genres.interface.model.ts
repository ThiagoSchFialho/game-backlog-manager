import { Game_genres } from "../../entities/game_genres";

export interface IGameGenresModel {
    createGameGenres(game_id: number, genre_id: number): Promise<Game_genres>;
    getAllGameGenres(): Promise<Game_genres[]>;
    getGameGenres(id: number): Promise<Game_genres | undefined>;
    updateGameGenres(id: number, game_id: number, genre_id: number): Promise<Game_genres | undefined>;
    deleteGameGenres(id: number): Promise<Game_genres | undefined>;
}