const fs = require('fs');

const data = process.argv[2];

fs.writeFile('note.txt', data, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
