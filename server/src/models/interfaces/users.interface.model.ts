import { Users } from "../../entities/users";

export interface IUserModel {
    createUser(steam_id: number, steam_api_key: string): Promise<Users>;
    getUser(): Promise<Users | null>;
    updateUser(steam_id: number, steam_api_key: string): Promise<Users | null>;
    deleteUser(steam_id: number): Promise<boolean>;
}