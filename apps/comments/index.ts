import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4001;

interface comment {
  id: string;
  content: string;
}

const commentsByPostId: { [key: string]: comment[] } = {};

app.get('/posts/:id/comments', (req, res) => {
  res.status(200).send(commentsByPostId);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentCreated = { id: uuidv4(), content: req.body.content };

  if (commentsByPostId[req.params.id]) {
    commentsByPostId[req.params.id].push(commentCreated);
  } else {
    commentsByPostId[req.params.id] = [commentCreated];
  }

  res.status(201).send(commentCreated);
});

app.listen(port, () => {
  console.log(`Posts Service running at: http://localhost:${port}`);
});
