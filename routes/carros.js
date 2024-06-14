var express = require('express')
var router = express.Router()
const carroController = require('../controllers/carro.controller')

router.get('/', carroController.getCarros)
router.get('/:id', carroController.viewCarro)
router.post('/', carroController.createCarro)
router.put('/:id', carroController.updateCarro)
router.delete('/:id', carroController.deleteCarro)

module.exports = router