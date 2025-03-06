const axios = require('axios');

class Cliente {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  hola() {
    return 'hola';
  }

  static create() {
    const id = Math.random().toString(36).substr(2, 3); // Genera un ID al azar
    const nombre = `Cliente ${id}`;
    return new Cliente(id, nombre);
  }

  
}

module.exports = Cliente;