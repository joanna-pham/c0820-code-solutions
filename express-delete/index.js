const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Gahtzu',
    course: 'Smashin',
    grade: 50
  },
  {
    id: 2,
    name: 'iBDW',
    course: 'Smashin',
    grade: 100
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json(grades));

app.delete('/api/grades/:id', (req, res) => {
  const idNum = parseInt(req.params.id, 10); // parse into number -- currently string

  for (let i = 0; i < grades.length; i++) {
    if (idNum === grades[i].id) {
      grades.splice(grades[i], 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
