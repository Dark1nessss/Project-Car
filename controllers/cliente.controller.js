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

const autenticarSessao = async(req, res) => {
    const data = req.body;
    const cliente = await Cliente.findOne({where: {nome: data.nome}})
    if(cliente){
        if(cliente.validPassword(data.password)){
            // Flag sessao, user esta autenticado
            req.session.loggedIn = true
            req.session.cliente_id = cliente.id
            res.json(cliente)
            console.log(req.session)
        } else {
            res.json("password errada")
        }
    } else {
        res.json("cliente nao encontrado")
    }
}

const login = async(req, res) => {
    const data = req.body;
    const cliente = await Cliente.findOne({where: {email: data.email}})
    if(cliente){
        if(cliente.validPassword(data.password)){
            // Flag sessao, user esta autenticado
            req.session.loggedIn = true
            req.session.cliente_id = cliente.id
            req.session.nome_cliente = cliente.nome
            req.session.email_cliente = cliente.email
            res.redirect('/')
            console.log(req.session)
        } else {
            res.json("password errada")
        }
    } else {
        res.json("cliente nao encontrado")
    }
}

const register = async(req, res) => {
    const data = req.body;
    const cliente = await Cliente.findOne({where: {nome: data.nome}})
    if(cliente){
        res.json("cliente ja existe")
    } else {
        cliente_criado = await Cliente.create(data)
        req.flash("success", "Conta criada :D")
        res.redirect('/login')
    }
}


module.exports = {
    criarcliente,
    verificarCliente,
    autenticarSessao,
    login,
    register
    
}