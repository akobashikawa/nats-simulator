# Nats Simulator

Para probar conceptos de nats.

## Run

```
json-server --port 4000 db.json

node simulator.js

node clientes-server.js
```

## Convenciones

- clientes-server es un server http
  - define los endpoints
- clientes-service
  - define el business logic
- clientes-${repositoryType}-repository
  - implementan un tipo particular de repository
  - repository-interface define la interface
  - el repositoryType se indica en .env REPOSITORY
- cliente
  - define la entidad