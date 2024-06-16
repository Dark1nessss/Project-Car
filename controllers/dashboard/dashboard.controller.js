const models = require('../../models')
const Cliente = models.Cliente

const getClientes = async(req, res) => {
    const clientes = await Cliente.findAll({
        limit: 10
    })
    return clientes
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

        console.log(clientes_result.result)

        res.render('dashboard', {
            is_admin: req.session.is_admin,
            nome_cliente: req.session.nome_cliente,
            foto_perfil: req.session.foto_perfil,
            clientes: clientes_result.result

        })
    } else {
        res.json('NOT AUTHORIZED!')
    }
    
}

module.exports = {
    renderDashboard,
    getClientes
}