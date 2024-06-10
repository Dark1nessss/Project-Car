var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nome_cliente: req.session.nome_cliente });
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

router.get('/profile', function(req, res, next){
  if(req.session.loggedIn){
    res.render('profile', {
      nome_cliente: req.session.nome_cliente,
      email_cliente: req.session.email_cliente,
      foto_perfil: req.session.foto_perfil,
    })
    console.log(foto_perfil)
  } else {
    res.redirect("/login");
  }
  
})
module.exports = router;
