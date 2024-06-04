var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nome_cliente: req.session.nome_cliente });
});

router.get('/login', function(req, res, next){
  res.render('login')
})

router.get('/register', function(req, res, next){
  res.render('register')
})

router.get('/logout', function(req,res,next){
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
