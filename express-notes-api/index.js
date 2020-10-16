const express = require('express');
const app = express();

const data = require('./data.json');

const arrayJson = [];

const errorPositive = { error: 'id must be a positive integer' };
const errorMissingNum = { error: 'cannot find note with id' };

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res, next) => {
  const notesJson = data.notes; // object
  for (const prop in notesJson) {
    arrayJson.push(data.notes[prop]);
  }
  res.status(200).json(arrayJson);
});

app.get('/api/notes/:id', (req, res, next) => {
  const idNum = parseInt(req.params.id, 10);
  // const notesJson = data.notes; // object
  // if (!Number.isInteger(idNum)) {
  //   res.status(400).json(errorPositive);
  // }
  // if (idNum) {
  //   res.status(200).json(data.notes[idNum]);
  //   next();
  // }
  // if (typeof data.notes[idNum] === 'undefined') {
  //   // res.json(`${errorMissingNum} ${req.params.id}`);
  //   console.log('running this');
  //   res.status(404).json(errorMissingNum);
  // }

  if (!Number.isInteger(idNum)) {
    res.status(400).json(errorPositive);
  } else if (idNum) {
    res.status(200).json(data.notes[idNum]);
  } else {
    res.status(404).json(errorMissingNum);
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
