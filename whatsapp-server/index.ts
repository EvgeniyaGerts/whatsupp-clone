import express from 'express';
import cors from 'cors'
import { chats } from './db'

const app = express();

app.use(cors)

app.get('/chats', (req, res) => {
  res.json(chats)
})

app.get('/_ping', (req, res) => {
  res.send('pong');
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
