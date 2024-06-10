var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nome_cliente: req.session.nome_cliente, foto_perfil: req.session.foto_perfil, is_admin: req.session.is_admin});
});

router.get('/login', function(req, res, next){
  res.render('login', {success: req.flash("success")})
})

router.get('/register', function(req, res, next){
  res.render('register')
})

router.get('/logout', function(req,res,next){
  req.session.destroy()
  res.redirect('/')
})

router.get('/dashboard', function(req,res,next){
  res.render('dashboard', {is_admin: req.session.is_admin, nome_cliente: req.session.nome_cliente})
})

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
