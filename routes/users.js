var express = require('express');
var router = express.Router();
const clienteController = require('../controllers/cliente.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/criarcliente', clienteController.criarcliente)

module.exports = router;
