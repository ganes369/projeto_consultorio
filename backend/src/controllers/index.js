const { patientCreate } = require('./Patient/Create')
const { patientListCpf } = require('./Patient/List')
const { patientUpdate } = require('./Patient/Update')
const { healthInsuranceCreate } = require('./Health_Insurance/Create')
const { healthInsuranceList } = require('./Health_Insurance/List')
const { healthInsuranceUpdate } = require('./Health_Insurance/Update')
const { prescriptionCreate } = require('./prescription/Create')



module.exports = {
    patientCreate,
    patientListCpf,
    patientUpdate,
    healthInsuranceCreate,
    healthInsuranceList,
    healthInsuranceUpdate,
    prescriptionCreate
}