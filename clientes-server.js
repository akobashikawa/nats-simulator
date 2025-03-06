const express = require('express');
const app = express();
const name = 'clientes server';
const port = 3010;
const ClientesService = require('./clientes-service');
const clientesService = new ClientesService();

// Middleware para parsear JSON
app.use(express.json());

app.get('/hola', (req, res) => {
    const result = clientesService.hola();
    res.send(result);
});

app.get('/clientes', async (req, res) => {
    const result = await clientesService.getClientes();
    res.send(result);
});



// Middleware para manejar rutas no existentes
app.use((req, res, next) => {
  res.status(404).send('URL no encontrada');
});

app.listen(port, () => {
  console.log(`${name} app funcionando en http://localhost:${port}`);
});
