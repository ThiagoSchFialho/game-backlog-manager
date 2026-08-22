import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', function (req: Request, res: Response) {
  return res.status(200).json({ message: 'Conexão estabelecida' });
});

export default router;