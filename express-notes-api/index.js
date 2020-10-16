const express = require('express');
const app = express();

const data = require('./data.json');

const fs = require('fs');

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
  // has a content
  // no content - 400
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
  console.log('dataJson', dataJson);
  // console.log('newData', newData);
  // send a response with an id and content
  // content is easy
  // how to send id
  // update the data.json

  // use fs module
  // need to use writefile

  fs.writeFile('./data.json', dataJson, err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(201).json(newData);
    }
  });

  // get the data.json
  // create a new object {id: , content: }
  // find the id
  // incretment id
  // update data.json
  // stringinfy new object
  // try to write to data.json
  // if it doesn't write : send 500
  // if it does write send 201

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
