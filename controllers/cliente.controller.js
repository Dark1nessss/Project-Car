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

const mudar_foto_perfil = async(req, res) => {
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('Nenhum ficheiro enviado')
    }
    console.log(req.files)
    const foto = req.files.profile_picture
	const {uploadedFilePath} = req.body
    const cliente = await Cliente.findByPk(req.session.cliente_id)
    if(cliente){
        console.log("Nome do ficheiro: " + foto.name)
        console.log("Nome do cliente: " + cliente.nome)
        const foto_mudada = await Cliente.update({foto_perfil: foto.name}, {where: {id: req.session.cliente_id}})
        console.log(foto_mudada)
    } else {
        console.log("erro")
    }
}


module.exports = {
    criarcliente,
    verificarCliente,
    autenticarSessao,
    login,
    register,
    mudar_foto_perfil
    
}