import { ICollection_games } from "./interfaces/collection_games.interface";

export class Collections_games implements ICollection_games {
    collection_id: number;
    game_id: number;

    constructor(collection_id: number, game_id: number) {
        this.collection_id = collection_id;
        this.game_id = game_id;
    }
}