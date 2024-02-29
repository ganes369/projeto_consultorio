const { patientCreate } = require('./patient/Create')
const { patientListCpf } = require('./patient/List')
const { patientUpdate } = require('./patient/Update')
const { healthInsuranceCreate } = require('./Health_Insurance/Create')
const { healthInsuranceList } = require('./Health_Insurance/List')
const { healthInsuranceUpdate } = require('./Health_Insurance/Update')





module.exports = {
    patientCreate,
    patientListCpf,
    patientUpdate,
    healthInsuranceCreate,
    healthInsuranceList,
    healthInsuranceUpdate
}