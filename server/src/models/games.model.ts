import { Games } from "../entities/games";
import { CreateGameInput, IGamesModel, UpdateGameInput } from "./interfaces/games.interface.model";
import pool from "../config/db.config";

function dbError(context: string, error: unknown): Error {
    return new Error(`${context}\n\nDetalhes: ${error instanceof Error ? error.message : String(error)}`);
}

export class GamesModel implements IGamesModel {
    public async createGame(input: CreateGameInput): Promise<Games> {
        try {
            const result = await pool.query(`
                INSERT INTO games (
                    title, steam_id, developer, release_date,
                    playtime, status, cover_square, cover_hero,
                    cover_grid, personal_rating
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                RETURNING *;    
            `, [
                input.title,
                input.steam_id,
                input.developer,
                input.release_date,
                input.playtime,
                input.status,
                input.cover_square ?? null,
                input.cover_hero ?? null,
                input.cover_grid ?? null,
                input.personal_rating ?? null
            ]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao adicionar jogo ao banco de dados.", error);
        }
    }


    public async getGameById(id: number): Promise<Games | undefined> {
        try {
            const result = await pool.query(`
                SELECT * FROM games
                WHERE id = $1;
            `, [id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao buscar jogo por id.", error);
        }
    }


    public async getGameBySteamId(steam_id: number): Promise<Games | undefined> {
        try {
            const result = await pool.query(`
                SELECT * FROM games
                WHERE steam_id = $1;
            `, [steam_id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao buscar jogo por steam_id.", error);
        }
    }


    public async getAllGames(): Promise<Games[]> {
        try {
            const result = await pool.query(`
                SELECT * FROM games;
            `);

            return result.rows;
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao buscar jogos.", error);
        }
    }


    public async updateGame(id: number, input: UpdateGameInput): Promise<Games | undefined> {
        try {
            const result = await pool.query(`
                UPDATE games
                SET title = $2,
                    steam_id = $3,
                    developer = $4,
                    release_date = $5,
                    playtime = $6,
                    status = $7,
                    cover_square = $8,
                    cover_hero = $9,
                    cover_grid = $10,
                    personal_rating = $11
                WHERE id = $1
                RETURNING *;
            `, [
                id,
                input.title,
                input.steam_id,
                input.developer,
                input.release_date,
                input.playtime,
                input.status,
                input.cover_square ?? null,
                input.cover_hero ?? null,
                input.cover_grid ?? null,
                input.personal_rating ?? null
            ]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao atualizar jogo.", error);
        }
    }


    public async deleteGame(id: number): Promise<Games | undefined> {
        try {
            const result = await pool.query(`
                DELETE FROM games
                WHERE id = $1
                RETURNING *;
            `, [id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao deletar jogo.", error);
        }
    }
    
}