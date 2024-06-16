const models = require('../models')
const Modelo = models.Modelo

const getModelos = async(req, res) => {
    const modelos = await Modelo.findAll()
    res.json(modelos)
}

module.exports = {
    getModelos
}