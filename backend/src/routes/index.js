const { Router } = require('express')
const { patientCreate, patientListCpf, patientUpdate, healthInsuranceCreate,
    healthInsuranceList, healthInsuranceUpdate } = require('../controllers')
const routes = Router()


routes.post('/patientCreate', patientCreate)
routes.get('/patientListCpf', patientListCpf)
routes.put('/patientUpdate/:id', patientUpdate)

routes.post('/healthInsuranceCreate', healthInsuranceCreate)
routes.get('/healthInsuranceList', healthInsuranceList)
routes.put('/healthInsuranceUpdate/:id', healthInsuranceUpdate)

module.exports = routes