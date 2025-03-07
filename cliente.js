const axios = require('axios');

class Cliente {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  hola() {
    return 'hola';
  }

  static create(data) {
    return new Cliente(id, nombre);
  }

  
}

module.exports = Cliente;