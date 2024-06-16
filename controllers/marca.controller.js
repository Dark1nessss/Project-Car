const models = require('../models')
const Marca = models.Marca

const getMarcas = async(req, res) => {
    const marcas = await Marca.findAll()
    res.json(marcas)
}

const viewMarca = async(req, res) => {
    const id = req.params.id
    const marca = await Marca.findByPk(id)
    res.json(marca)
}

module.exports = {
    getMarcas,
    viewMarca
}