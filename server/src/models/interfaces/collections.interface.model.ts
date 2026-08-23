import { Collections } from "../../entities/collections";

export interface CollectionWithGames extends Collections {
    games: any[]; // ideal: trocar `any` pela interface Game, se você tiver uma
}

export interface ICollectionsModel {
    createCollection(title: string): Promise<Collections>;
    getAllCollections(): Promise<Collections[]>;
    getAllCollectionsWithGames(): Promise<CollectionWithGames[]>;
    getCollection(id: number): Promise<Collections | undefined>;
    updateCollection(id: number, title: string): Promise<Collections | undefined>;
    deleteCollection(id: number): Promise<Collections | undefined>;
}