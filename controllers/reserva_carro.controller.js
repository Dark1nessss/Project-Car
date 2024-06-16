const models = require('../models')
const ReservaCarro = models.ReservaCarro
const Cliente = models.Cliente
const Carro = models.Carro
const Modelo = models.Modelo
const Marca = models.Marca

const getReservas = async(req, res) => {
    const reservas = await ReservaCarro.findAll({
        include: [
            {
                model: Cliente,
                as: 'cliente',
                attributes: ['nome']
            },
            {
                model: Carro,
                as: 'carro',
                attributes: ['id'],
                include: [
                    {
                        model: Marca,
                        as: 'marca',
                        attributes: ['nome']
                    },
                    
                    {
                        model: Modelo,
                        as: 'modelo',
                        attributes: ['nome']
                    }
                ]
            }
        ]
    })
    res.json(reservas)
}

const viewReserva = async(req, res) => {
    const id = req.params.id
    const reserva = await ReservaCarro.findByPk(id, {
        include: [
            {
                model: Cliente,
                as: 'cliente',
                attributes: ['nome']
            },
            {
                model: Carro,
                as: 'carro',
                attributes: ['id'],
                include: [
                    {
                        model: Marca,
                        as: 'marca',
                        attributes: ['nome']
                    },
                    
                    {
                        model: Modelo,
                        as: 'modelo',
                        attributes: ['nome']
                    }
                ]
            }
        ]
    })
    res.json(reserva)
}

const createReserva = async(req, res) => {
    const data = req.body
    const reserva = await ReservaCarro.create(data)
    res.json(reserva)
}

const updateReserva = async(req, res) => {
    const data = req.body
    await ReservaCarro.update({
        "cliente_id": data.cliente_id,
        "carro_id": data.carro_id,
        "data_inicio": data.data_inicio,
        "data_fim": data.data_fim
    }, {where: {id: req.params.id}})
    const reservaAtualizado = await ReservaCarro.findOne({where: {id: req.params.id}})
    res.json(reservaAtualizado)
}

const deleteReserva = async(req, res) => {
    const id = req.params.id
    await ReservaCarro.destroy({where: {id: id}})
    res.json({message: 'Reserva apagado com sucesso!'})
}

module.exports = {
    getReservas,
    viewReserva,
    createReserva,
    updateReserva,
    deleteReserva,
}