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

const updateCarro = async(req, res) => {
    const data = req.body
    await Carro.update({
        "marca_id": data.marca_id,
        "modelo_id":data.modelo_id,
        "ano":data.ano,
        "preco": data.preco,
    }, {where: {id: req.params.id}})
    const carroAtualizado = await Carro.findOne({where: {id: req.params.id}})
    res.json(carroAtualizado)
}

module.exports = {
    getCarros,
    viewCarro,
    createCarro,
    updateCarro
}