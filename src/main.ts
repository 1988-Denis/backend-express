import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  console.log('Пришел запрос GET /');
  res.json({ messages: 'Спасибо за GET запрос' });
});

server.post('/', (req: Request, res: Response) => {
  console.log('Пришел запрос POST /');
  res.json({ messages: 'Спасибо за POST запрос' });
});

server.delete('/', (req: Request, res: Response) => {
  console.log('Удаление задачи');
  res.json({ messages: 'Удаление не поддерживается' });
});

const port = 2000;

server.listen(port, () => {
  console.log(`Просмотр по порт ${port}`);
});
