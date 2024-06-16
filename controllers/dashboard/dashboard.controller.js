const models = require('../../models')
const Cliente = models.Cliente
const Carro = models.Carro
const Marca = models.Marca
const Modelo = models.Modelo

const getClientes = async(req, res) => {
    const clientes = await Cliente.findAll({
        limit: 10
    })
    return clientes
}

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

const renderDashboard = async(req, res) => {
    if(req.session.is_admin){
        const clientes = await getClientes()
        let clientes_result = { error: "", result: [] };
        
        for(let i in clientes){
            clientes_result.result.push({
                id: clientes[i].id,
                nome: clientes[i].nome,
                email: clientes[i].email
            })
        }

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

        console.log(carros_result)

        res.render('dashboard', {
            is_admin: req.session.is_admin,
            nome_cliente: req.session.nome_cliente,
            foto_perfil: req.session.foto_perfil,
            clientes: clientes_result.result,
            carros: carros_result.result

        })
    } else {
        res.json('NOT AUTHORIZED!')
    }
    
}

module.exports = {
    renderDashboard,
    getClientes
}