const models = require('../../models')
const Carro = models.Carro
const Marca = models.Marca
const Modelo = models.Modelo

const getCarros = async(req, res) => {
    const carros = await Carro.findAll({
        include: [
            {
                model: Marca,
                as: 'marca',
                attributes: ['nome']
            },
            {
                model: Modelo,
                as: 'modelo',
                attributes: ['nome']
            }
        ]
    })
    return carros
}

const renderReservaCarro = async(req, res) => {
    if(req.session.loggedIn){
        const carros = await getCarros()
        let carros_result = {error: "", result: []}
        for(let i in carros){
            carros_result.result.push({
                id: carros[i].id,
                ano: carros[i].ano,
                preco: carros[i].preco,
                marca: carros[i].marca.nome,
                modelo: carros[i].modelo.nome
            })
        }
        res.render('reservarcarro', {carros: carros_result.result,  cliente_id: req.session.cliente_id,})
    } else {
        res.redirect('/login')
    }
}

module.exports = {
    renderReservaCarro
}