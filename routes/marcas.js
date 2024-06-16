var express = require('express')
var router = express.Router()
const marcaController = require('../controllers/marca.controller')

router.get('/', marcaController.getMarcas)

module.exports = router