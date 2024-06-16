var express = require('express')
var router = express.Router()
const modeloController = require('../controllers/modelo.controller')

router.get('/', modeloController.getModelos)

module.exports = router