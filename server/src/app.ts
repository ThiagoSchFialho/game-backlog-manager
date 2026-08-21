import express, { Request, Response } from 'express';

import indexRouter from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors({
//   origin: 'host',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type']
// }));

app.use(express.json());
app.use('/', indexRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});