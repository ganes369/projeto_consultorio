const { Router } = require('express')
const { createPatient } = require('../controllers')
const routes = Router()


routes.post('/cadastrarPaciente', createPatient)


module.exports = routes