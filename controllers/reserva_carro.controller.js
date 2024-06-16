const models = require('../models')
const ReservaCarro = models.ReservaCarro

const getReservas = async(req, res) => {
    const reservas = await ReservaCarro.findAll()
    res.json(reservas)
}

module.exports = {
    getReservas
}