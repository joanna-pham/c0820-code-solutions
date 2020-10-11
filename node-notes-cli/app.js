const fs = require('fs');

let dataParse;
let dataStringify;

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  dataParse = JSON.parse(data);

  if (process.argv[2] === 'read') { // reading my data as an object
    const notes = dataParse.notes;
    for (const prop in notes) {
      console.log(`${prop}: ${notes[prop]}`);
    }
    process.exit(1);
  }

  if (process.argv[2] === 'create') {
    const data = process.argv[3];

    dataParse.notes[dataParse.nextId] = data;
    dataParse.nextId++;
  }

  if (process.argv[2] === 'delete') {
    delete dataParse.notes[process.argv[3]];
  }

  if (process.argv[2] === 'update') {
    dataParse.notes[process.argv[3]] = process.argv[4]; // string
  }

  const keyword = ['delete', 'create', 'update'];
  if (keyword.includes(process.argv[2])) {
    dataStringify = JSON.stringify(dataParse, null, 2);

    fs.writeFile('./data.json', dataStringify, err => { // parse, update, then assign back to writeFile
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
});
