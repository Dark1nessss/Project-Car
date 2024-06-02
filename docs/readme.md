# Projeto para reservar carros

## Modelo ER

### Entidades
Cliente(nome, email, morada, data_nascimento)
Marca(nome)
Modelo(nome, Marca)
Carro(Marca, Modelo, ano, preco)
Reserva(data_inicio, data_fim, preco_total, cliente, carro)

### Relacionamentos
Um cliente pode reservar vários carros, mas um carro só pode ser reservado por um cliente por vez.
reservaCarro(Cliente, Carro) 1:N

![](/docs/Diagram.drawio.png)

## Rodar localmente

Instalar as dependencias
```sh
npm install
```

Rodar a aplicacao
```sh
DEBUG=project-car:* npm start
```