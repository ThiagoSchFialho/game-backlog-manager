import { Collections } from "../../entities/collections";

export interface ICollectionsModel {
    createCollection(title: string): Promise<Collections>;
    getAllCollections(): Promise<Collections[]>;
    getCollection(id: number): Promise<Collections | undefined>;
    updateCollection(id: number, title: string): Promise<Collections | undefined>;
    deleteCollection(id: number): Promise<Collections | undefined>;
}