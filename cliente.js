const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Cliente app');
});

app.listen(port, () => {
  console.log(`cliente app funcionando en http://localhost:${port}`);
});