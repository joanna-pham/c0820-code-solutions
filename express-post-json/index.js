const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json(grades));

app.post('/api/grades', (req, res) => {
  const data = req.body;
  grades.push(data);
  data.id = nextId++;
  res.status(201).send(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
