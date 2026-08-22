import { IGame_genres } from "./interfaces/game_genres.interface";

export class Game_genres implements IGame_genres {
    game_id: number;
    genre_id: number;

    constructor(game_id: number, genre_id: number) {
        this.game_id = game_id;
        this.genre_id = genre_id;
    }
}