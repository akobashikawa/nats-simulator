const express = require('express');
const path = require('path');
const app = express();
const logger = require('./logger');

const name = 'simulator';
const port = process.env.SIMULATOR_PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/hola', (req, res) => {
    const result = 'hola';
    res.send(result);
});

// Middleware para manejar rutas no existentes
app.use((req, res, next) => {
  res.status(404).send('URL no encontrada');
});

app.listen(port, () => {
  logger.info(`${name} app funcionando en http://localhost:${port}`);
});
