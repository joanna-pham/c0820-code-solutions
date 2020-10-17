const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
const { response } = require('express');

const arrayJson = [];

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
  if (idNum < 1 || !idNum) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[idNum]) {
    res.status(200).json(data.notes[idNum]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + idNum });
  }
});

app.post('/api/notes', (req, res, next) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  let dataJson = data;

  const newData = {
    id: dataJson.nextId,
    content: req.body.content
  };

  let nextId = dataJson.nextId;
  dataJson.notes[nextId] = newData;
  nextId++;
  dataJson.nextId = nextId;
  dataJson = JSON.stringify(dataJson, null, 2);

  fs.writeFile('./data.json', dataJson, err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(201).json(newData);
    }
  });
});

app.delete('/api/notes/:id', (req, res, next) => {
  let dataJson = data;

  const idNum = parseInt(req.params.id, 10);
  if (idNum < 1 || !idNum) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[idNum]) {
    delete data.notes[idNum];
    dataJson = JSON.stringify(dataJson, null, 2);
    fs.writeFile('./data.json', dataJson, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
      res.sendStatus(204);
    });
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + idNum });
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  // no valid id (positive int) or no content
  // --400 with error property
  // valid id and content but no matching note
  // --404 response
  // valid id and content but error on file
  // --500 response
  // valid id and content and updated successfully
  // --200 response
  const dataJson = data;

  const idNum = parseInt(req.params.id, 10);

  // if (idNum === dataJson.notes[idNum].id && typeof req.body.content !== 'undefined') {
  //   res.status(200).json(dataJson.notes[idNum]);
  // } else {
  //   res.status(400).json({ error: 'content is a required field' });
  // }

  if (!idNum || idNum < 1) {
    console.log('running this');
    res.status(400).json({ error: 'id must be a positive integer' });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
