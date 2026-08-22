import { Genres } from "../../entities/genres";

export interface IGenresModel {
    createGenre(name: string): Promise<Genres>
    getAllGenres(): Promise<Genres[]>
    getGenre(id: number): Promise<Genres>
    updateGenre(id: number, name: string): Promise<Genres>
    deleteGenre(id: number): Promise<Genres>
}