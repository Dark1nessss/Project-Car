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

module.exports = {
    getReservas,
    createReserva
}