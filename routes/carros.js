var express = require('express')
var router = express.Router()
const carroController = require('../controllers/carro.controller')

router.get('/', carroController.getCarros)