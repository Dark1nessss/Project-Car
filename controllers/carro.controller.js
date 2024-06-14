const models = require('../models')
const Carro = models.Carro

const getCarros = async(req, res) => {
    const carros = await Carro.find({})
    res.json(carros)
}

module.exports = {
    getCarros
}