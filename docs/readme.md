# Projeto para reservar carros

## Modelo ER

### Entidades
Cliente(nome, email, morada, data_nascimento)
Marca(nome)
Modelo(nome)
Carro(marca, modelo, ano, preco)
Reserva(data_inicio, data_fim, preco_total, cliente, carro)

### Relacionamentos
Um cliente pode reservar vários carros, mas um carro só pode ser reservado por um cliente por vez.
reservaCarro(Cliente, Carro) 1:N
