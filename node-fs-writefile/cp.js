const fs = require('fs');

fs.readFile('note.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFile('reminder.txt', data, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});

// const data = process.argv[2];
