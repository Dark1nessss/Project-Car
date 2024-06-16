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

const createMarca = async(req, res) => {
    const data = req.body
    const marca = await Marca.create(data)
    res.json(marca)
}

const updateMarca = async(req, res) => {
    const data = req.body
    await Marca.update({
        "nome": data.nome
    }, {where: {id: req.params.id}})
    const marcaAtualizado = await Marca.findOne({where: {id: req.params.id}})
    res.json(marcaAtualizado)
}

const deleteMarca = async(req, res) => {
    const id = req.params.id
    await Marca.destroy({
        where: {id: id}
    })
    res.json({message: 'Marca apagada com sucesso!'})
}

module.exports = {
    getMarcas,
    viewMarca,
    createMarca,
    updateMarca,
    deleteMarca
}