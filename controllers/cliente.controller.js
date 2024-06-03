const models = require('../models')
const Cliente = models.Cliente

const criarcliente = async(req, res) => {
    const data = req.body;
    const cliente = await Cliente.create(data);
    res.json(cliente);
}

// Verificar password
const verificarCliente = async(req, res) => {
    const data = req.body;

    // Buscar o cliente atraves do nome
    const cliente = await Cliente.findOne({where: {nome: data.nome}})
    if(cliente){
        if(cliente.validPassword(data.password)){
            res.json("Password corresponde!")
        } else {
            res.json("Password errada")
        }
    } else {
        res.json("Cliente nao encontrado")
    }
}
module.exports = {
    criarcliente,
    verificarCliente
    
}