const models = require('../models')
const Modelo = models.Modelo

const getModelos = async(req, res) => {
    const modelos = await Modelo.findAll()
    res.json(modelos)
}

const viewModelo = async(req, res) => {
    const id = req.params.id
    const modelo = await Modelo.findByPk(id)
    res.json(modelo)
}

const createModelo = async(req, res) => {
    const data = req.body
    const modelo = await Modelo.create(data)
    res.json(modelo)
}

module.exports = {
    getModelos,
    viewModelo,
    createModelo
}