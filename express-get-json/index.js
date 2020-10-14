const express = require('express');

const app = express();

const array = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Joanna Pham',
    course: 'Node.js',
    grade: 9005
  }
];

app.get('/api/grades', function (req, res) {
  res.json(array);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
