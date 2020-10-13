const express = require('express'); // import express

const app = express(); // instantiate an Express app object

app.use((req, res, next) => {
  const filePath = { root: __dirname };

  if (req.originalUrl) {
    res.sendFile(req.path, filePath);
  } else {
    next();
    res.status(404).send('404: Not Found');
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
