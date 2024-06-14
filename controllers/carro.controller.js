const models = require('../models')
const Carro = models.Carro

const getCarros = async(req, res) => {
    const carros = await Carro.findAll()
    res.json(carros)
}

const viewCarro = async(req, res) => {
    const id = req.params.id
    const carro = await Carro.findByPk(id)
    res.json(carro)
}

const createCarro = async(req, res) => {
    const data = req.body
    const carro = await Carro.create(data)
    res.json(carro)
}

module.exports = {
    getCarros,
    viewCarro,
    createCarro
}