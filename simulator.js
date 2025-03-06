const express = require('express');
const path = require('path');
const app = express();
const name = 'simulator';
const port = 3000;

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
  console.log(`${name} app funcionando en http://localhost:${port}`);
});
