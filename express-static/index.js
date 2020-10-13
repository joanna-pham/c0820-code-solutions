const express = require('express');

const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public/');

const staticPath = express.static(absolutePath);

app.use(staticPath);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
