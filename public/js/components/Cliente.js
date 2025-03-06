class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static create() {
    const id = Math.random().toString(36).substr(2, 3); // Genera un ID al azar
    const name = `Cliente ${id}`;
    return new Customer(id, name);
  }
}

export default Customer;