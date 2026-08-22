import { Collections } from "../entities/collections";
import { ICollectionsModel } from "./interfaces/collections.interface.model";
import pool from "../config/db.config";

function dbError(context: string, error: unknown): Error {
    return new Error(`${context}\n\nDetalhes: ${error instanceof Error ? error.message : String(error)}`);
}

export class CollectionsModel implements ICollectionsModel {
    public async createCollection(title: string): Promise<Collections> {
        try {
            const result = await pool.query(`
                INSERT INTO collections (title)
                VALUES ($1)
                RETURNING *;
            `, [title]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao adicionar coleção ao banco de dados.", error);
        }
    }

    public async getAllCollections(): Promise<Collections[]> {
        try {
            const result = await pool.query(`
                SELECT * FROM collections;
            `);

            return result.rows;
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao buscar coleções.", error);
        }
    }

    public async getCollection(id: number): Promise<Collections | undefined> {
        try {
            const result = await pool.query(`
                SELECT * FROM collections
                WHERE id = $1;
            `, [id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao buscar coleção.", error);
        }
    }

    public async updateCollection(id: number, title: string): Promise<Collections | undefined> {
        try {
            const result = await pool.query(`
                UPDATE collections
                SET title = $2
                WHERE id = $1
                RETURNING *;
            `, [id, title]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao atualizar coleção.", error);
        }
    }

    public async deleteCollection(id: number): Promise<Collections | undefined> {
        try {
            const result = await pool.query(`
                DELETE FROM collections
                WHERE id = $1
                RETURNING *;
            `, [id]);

            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw dbError("Erro ao deletar coleção.", error);
        }
    }
}