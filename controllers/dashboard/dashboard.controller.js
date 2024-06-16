const models = require('../../models')
const Cliente = models.Cliente

const renderDashboard = async(req, res) => {
    if(req.session.is_admin){
        res.render('dashboard', {is_admin: req.session.is_admin, nome_cliente: req.session.nome_cliente, foto_perfil: req.session.foto_perfil})
    } else {
        res.json('NOT AUTHORIZED!')
    }
    
}

const getClientes = async(req, res) => {
    const clientes = await Cliente.findAll()
    console.log(clientes)
    res.json(clientes)
}

module.exports = {
    renderDashboard,
    getClientes
}