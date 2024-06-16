const models = require('../models')
const ReservaCarro = models.ReservaCarro

const getReservas = async(req, res) => {
    const reservas = await ReservaCarro.findAll()
    res.json(reservas)
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
    res.json({message: 'Carro apagado com sucesso!'})
}

module.exports = {
    getReservas,
    createReserva,
    updateReserva,
    deleteReserva,
}