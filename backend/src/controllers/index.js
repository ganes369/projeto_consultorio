const { patientCreate } = require('./patient/Create')
const { patientListCpf } = require('./patient/List')
const { patientUpdate } = require('./patient/Update')







module.exports = { patientCreate, patientListCpf, patientUpdate }