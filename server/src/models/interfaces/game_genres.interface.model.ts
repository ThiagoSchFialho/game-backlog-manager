import { Game_genres } from "../../entities/game_genres";

export interface IGameGenresModel {
    createGameGenre(game_id: number, genre_id: number): Promise<Game_genres>;
    getAllGameGenres(): Promise<Game_genres[]>;
    getGameGenre(id: number): Promise<Game_genres | undefined>;
    updateGameGenre(id: number, game_id: number, genre_id: number): Promise<Game_genres | undefined>;
    deleteGameGenre(id: number): Promise<Game_genres | undefined>;
}