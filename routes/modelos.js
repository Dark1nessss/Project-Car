var express = require('express')
var router = express.Router()
const modeloController = require('../controllers/modelo.controller')

router.get('/', modeloController.getModelos)
router.get('/:id', modeloController.viewModelo)
router.post('/', modeloController.createModelo)
router.put('/:id', modeloController.updateModelo)
router.delete('/:id', modeloController.deleteModelo)

module.exports = router