const models = require('../models')
const Marca = models.Marca

const getMarcas = async(req, res) => {
    const marcas = await Marca.findAll()
    res.json(marcas)
}

module.exports = {
    getMarcas
}