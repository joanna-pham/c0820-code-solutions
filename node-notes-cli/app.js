const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const dataParse = JSON.parse(data);

  if (process.argv[2] === 'read') {
    const notes = dataParse.notes;
    for (const prop in notes) {
      console.log(`${prop}: ${notes[prop]}`);
    }
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
    dataParse.notes[process.argv[3]] = process.argv[4];
  }

  const keyword = ['delete', 'create', 'update'];
  if (keyword.includes(process.argv[2])) {
    const dataStringify = JSON.stringify(dataParse, null, 2);

    fs.writeFile('./data.json', dataStringify, err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
});
