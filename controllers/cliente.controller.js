const models = require('../models')
const Cliente = models.Cliente

const bcrypt = require('bcrypt')
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
            req.session.morada_cliente = cliente.morada
            req.session.nif_cliente = cliente.nif
            req.session.data_nascimento = cliente.data_nascimento
            req.session.is_admin = cliente.is_admin
            res.redirect('/')
            
        } else {
            req.flash("error", "Email ou a palavra passe est]a errada!")
            res.redirect('/login')
        }
    } else {
        req.flash("error", "Falha ao encontrar a conta!")
        res.redirect('/login')
    }
}

const register = async(req, res) => {
    const data = req.body;
    const cliente = await Cliente.findOne({where: {email: data.email}})
    if(cliente){
        req.flash("error", "Falha ao criar conta. Ja existe uma conta com esse email!")
        res.redirect('/login')
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

const editar_cliente = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    // Handle optional fields
    data.morada = data.morada || null;
    data.nif = data.nif || null;
    data.email = data.email || null;

    // Handle date of birth formatting
    if (data.data_nascimento) {
        const date = new Date(data.data_nascimento);
        if (isNaN(date.getTime())) {
            return res.status(400).send('Data de nascimento inválida');
        }
        data.data_nascimento = date;
    } else {
        data.data_nascimento = null;
    }

    try {
        // Fetch the current client data
        const currentCliente = await Cliente.findOne({ where: { id: id } });

        // If password is not provided, use the current password
        if (!data.password) {
            data.password = currentCliente.password;
        }

        // Update the client data
        await Cliente.update(data, { where: { id: id }, individualHooks: true });

        // Fetch the updated client data
        const updatedCliente = await Cliente.findOne({ where: { id: req.params.id } });

        // Update session variables
        req.session.nome_cliente = updatedCliente.nome;
        req.session.email_cliente = updatedCliente.email;
        req.session.password = updatedCliente.password; // Keep this hashed
        req.session.nif_cliente = updatedCliente.nif;
        req.session.morada_cliente = updatedCliente.morada;
        req.session.data_nascimento = updatedCliente.data_nascimento;

        // Redirect to profile
        req.flash("success", "Informações mudadas! ;DDDDDDDD")
        res.redirect('/profile');
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = {
    criarcliente,
    verificarCliente,
    autenticarSessao,
    login,
    register,
    mudar_foto_perfil,
    editar_cliente,
}