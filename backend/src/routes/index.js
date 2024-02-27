const { Router } = require('express')
const { patientCreate, patientListCpf, patientUpdate } = require('../controllers')
const routes = Router()


routes.post('/patientCreate', patientCreate)
routes.get('/patientListCpf', patientListCpf)
routes.put('/patientUpdate/:id', patientUpdate)


module.exports = routes