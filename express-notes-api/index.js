const express = require('express');
const app = express();
const fs = require('fs');

const arrayJson = [];

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res, next) => {
  const data = require('./data.json');
  const notesJson = data.notes; // object
  for (const prop in notesJson) {
    arrayJson.push(data.notes[prop]);
  }
  res.status(200).json(arrayJson);
});

app.get('/api/notes/:id', (req, res, next) => {
  const data = require('./data.json');
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
  const data = require('./data.json');
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
  const data = require('./data.json');
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
  const data = require('./data.json');
  const dataJson = data;
  const idNum = parseInt(req.params.id, 10);

  if (idNum < 1 || !idNum) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }
  if (typeof req.body.content === 'undefined') {
    return res.status(400).json({ error: 'content is a required field' });
  }
  if (typeof dataJson.notes[idNum] === 'undefined') {
    return res.status(404).json({ error: `cannot find note with id ${idNum}` });
  }

  dataJson.notes[idNum].content = req.body.content;
  const dataStringify = JSON.stringify(dataJson, null, 2);

  fs.writeFile('./data.json', dataStringify, err => {
    if (err) {
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
    return res.status(200).json(dataJson.notes[idNum]);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
