var express = require('express');
var router = express.Router();

const dashboardController = require('../controllers/dashboard/dashboard.controller')
const reservacarroController = require('../controllers/reservacarro/reservacarro.controller')
const carrosController = require('../controllers/carro.controller')

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Esperar pela Promise que retorna os carros
    let carros = await carrosController.selectCarro();
    let carros_data = { error: "", result: [] };

    // Iterar sobre a lista de carros retornada
    carros.forEach(carro => {
      carros_data.result.push({
        marca_id: carro.dataValues.marca_id,
        modelo_id: carro.dataValues.modelo_id,
        ano: carro.dataValues.ano,
        preco: carro.dataValues.preco,
        marca_nome: carro.dataValues.marca.dataValues.nome,
        modelo_nome: carro.dataValues.modelo.dataValues.nome
      });
    });

    console.log(carros_data.result); // Verifique se os dados estão corretos

    res.render('index', { 
      nome_cliente: req.session.nome_cliente,
      foto_perfil: req.session.foto_perfil,
      is_admin: req.session.is_admin, 
      carros: carros_data.result
    });
  } catch (error) {
    console.error("Erro ao buscar carros:", error);
    res.render('index', { 
      nome_cliente: req.session.nome_cliente,
      foto_perfil: req.session.foto_perfil,
      is_admin: req.session.is_admin, 
      carros: [],
      error: "Erro ao buscar carros"
    });
  }
});


router.get('/login', function(req, res, next){
  res.render('login', {success: req.flash("success")})
})

router.get('/register', function(req, res, next){
  res.render('register')
})

router.get('/reservarcarro', reservacarroController.renderReservaCarro)
router.get('/minhasreservas', reservacarroController.renderReservasCliente)

router.get('/logout', function(req,res,next){
  req.session.destroy()
  res.redirect('/')
})

// DASHBOARD
router.get('/dashboard', dashboardController.renderDashboard)

router.get('/profile', function(req, res, next){
  if(req.session.loggedIn){
    res.render('profile', {
      cliente_id: req.session.cliente_id,
      nome_cliente: req.session.nome_cliente,
      email_cliente: req.session.email_cliente,
      morada_cliente: req.session.morada_cliente,
      nif_cliente: req.session.nif_cliente,
      foto_perfil: req.session.foto_perfil,
      data_nascimento: req.session.data_nascimento,
      success: req.flash("success")
    })
    console.log(data_nascimento)
  } else {
    res.redirect("/login");
  }
  
})
module.exports = router;
