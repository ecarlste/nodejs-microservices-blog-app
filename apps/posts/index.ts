import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4000;

interface Post {
  id: string;
  title: string;
}

const posts: { [key: string]: Post } = {};

app.get('/posts', (req, res) => {
  res.status(200).send(posts);
});

app.post('/posts', (req, res) => {
  const createdPost = { id: uuidv4(), title: req.body.title };

  posts[createdPost.id] = createdPost;

  res.status(201).send(createdPost);
});

app.listen(port, () => {
  console.log(`Posts Service running at: http://localhost:${port}`);
});
