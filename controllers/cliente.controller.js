const models = require('../models')
const Cliente = models.Cliente

const { v4: uuidv4 } = require('uuid');
const path = require('path')
const fs = require('fs');

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
            req.session.foto_perfil = cliente.foto_perfil
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

const mudar_foto_perfil = async (req, res) => {
    try {
        // Check if any file was uploaded
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('Nenhum ficheiro enviado');
        }

        const foto = req.files.profile_picture;

        // Generate unique file name
        const random_letters = uuidv4().substring(0, 5);
        const file_extension = path.extname(foto.name);
        foto.name = `${random_letters}${file_extension}`;

        // Define the upload path
        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        const uploadPath = path.join(uploadDir, foto.name);

        // Move the file
        await foto.mv(uploadPath);

        // Find the client and update the profile picture
        const cliente = await Cliente.findByPk(req.session.cliente_id);
        if (cliente) {
            await Cliente.update({ foto_perfil: foto.name }, { where: { id: req.session.cliente_id } });
            req.session.foto_perfil = foto.name;
        } else {
            return res.status(404).send('Cliente não encontrado');
        }

        // Redirect to the profile page
        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao mudar a foto de perfil');
    }
};


module.exports = {
    criarcliente,
    verificarCliente,
    autenticarSessao,
    login,
    register,
    mudar_foto_perfil
    
}