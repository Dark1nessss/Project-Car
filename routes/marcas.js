var express = require('express')
var router = express.Router()
const marcaController = require('../controllers/marca.controller')

router.get('/', marcaController.getMarcas)
router.get('/:id', marcaController.viewMarca)
router.post('/', marcaController.createMarca)
router.put('/:id', marcaController.updateMarca)

module.exports = router