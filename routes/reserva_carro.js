var express = require('express')
var router = express.Router()
const reservaController = require('../controllers/reserva_carro.controller')

router.get('/', reservaController.getReservas)

module.exports = router