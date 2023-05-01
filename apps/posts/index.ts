import express from 'express';

const app = express();
const port = 4000;

app.get('/posts', (req, res) => {
  console.log('GET /posts');
  res.status(200).send('GET /posts');
});

app.post('/posts', (req, res) => {
  console.log('POST /posts');
  res.status(200).send('POST /posts');
});

app.listen(port, () => {
  console.log(`Posts Service running at: http://localhost:${port}`);
});
