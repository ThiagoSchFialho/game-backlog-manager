import express, { Request, Response } from 'express';
import usersRouter from './routes/users';
import gamesRouter from './routes/games';

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors({
//   origin: 'host',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type']
// }));

app.use(express.json());
app.use('/users', usersRouter);
app.use('/games', gamesRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});