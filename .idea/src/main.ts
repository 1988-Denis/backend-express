import express from "express";
const server = express();

server.get("/", (req: express.Request, res: express.Response) => {
  console.log('Пришел запрос GET /');
  res.json ({massage:'Спасибо за GET запрос'})
});

server.post("/", (req: express.Request, res: express.Response) => {
  console.log('Пришел запрос POST /');
  res.json ({massage:'Спасибо за POST запрос'})
});

const port = 2000;

server.listen(port, () =>{
  console.log( `Listening on port ${port}` );
});

