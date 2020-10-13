const express = require('express');

const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public/');
// console.log('absolutePath', absolutePath);

const staticPath = express.static(absolutePath);
// console.log('staticPath', staticPath);

app.use(staticPath);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
