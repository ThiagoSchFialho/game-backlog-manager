import express, { Request, Response } from 'express';
import { UsersModel } from '../models/users.model';

const usersModel = new UsersModel();

const router = express.Router();

router.post('/', async function (req: Request, res: Response) {
  const { steam_id, steam_api_key } = req.body;
  
  if (!steam_id || !steam_api_key) {
    return res.status(400).json({ error: "Dados necessarios não informados para a criação do usuário." });
  }

  try {
    const user = await usersModel.getUserBySteamId(steam_id);

    if (user) {
      return res.status(409).json({ error: "Usuário com esse id steam já existe." });
    }

    const newUser = await usersModel.createUser(steam_id, steam_api_key);

    if (!newUser) {
      return res.status(500).json({ error: "Erro ao adicionar usuário no banco de dados." });
    }

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
});

export default router;