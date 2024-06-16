var express = require('express')
var router = express.Router()
const reservaController = require('../controllers/reserva_carro.controller')

router.get('/', reservaController.getReservas)
router.post('/', reservaController.createReserva)
router.put('/:id', reservaController.updateReserva)

module.exports = router