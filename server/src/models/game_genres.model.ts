import { Game_genres } from "../entities/game_genres";
import { IGameGenresModel } from "./interfaces/game_genres.interface.model";
import pool from "../config/db.config";

function dbError(context: string, error: unknown): Error {
    return new Error(`${context}\n\nDetalhes: ${error instanceof Error ? error.message : String(error)}`);
}

export class GameGenresModel implements IGameGenresModel {
    public async createGameGenres(game_id: number, genre_id: number): Promise<Game_genres> {
        try {
            const result = await pool.query(`
                INSERT INTO game_genres (game_id, genre_id)
                VALUES ($1, $2)
                RETURNING *;
            `, [game_id, genre_id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao adicionar gênero ao jogo.", error);
        }
    }

    public async getAllGameGenres(): Promise<Game_genres[]> {
        try {
            const result = await pool.query(`
                SELECT * FROM game_genres;
            `);

            return result.rows;
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao buscar gêneros dos jogos.", error);
        }
    }

    public async getGameGenres(id: number): Promise<Game_genres | undefined> {
        try {
            const result = await pool.query(`
                SELECT * FROM game_genres
                WHERE id = $1;
            `, [id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao buscar gênero do jogo.", error);
        }
    }

    public async updateGameGenres(id: number, game_id: number, genre_id: number): Promise<Game_genres | undefined> {
        try {
            const result = await pool.query(`
                UPDATE game_genres
                SET game_id = $2, genre_id = $3
                WHERE id = $1
                RETURNING *;
            `, [id, game_id, genre_id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao atualizar gênero do jogo.", error);
        }
    }

    public async deleteGameGenres(id: number): Promise<Game_genres | undefined> {
        try {
            const result = await pool.query(`
                DELETE FROM game_genres
                WHERE id = $1
                RETURNING *;
            `, [id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao deletar gênero do jogo.", error);
        }
    }
}