const knex = require("../../models/connection")


const patientListCpf = async (req, res) => {
    const { cpf } = req.body

    try {

        if (!cpf) {
            const searchPatient = await knex('pacientes')
                .orderBy('id')

            return res.json(searchPatient)
        }

        const searchPatient = await knex('pacientes')
            .where({ cpf })
            .first()


        if (!searchPatient) {
            return res.status(404).json({ mensagem: 'Paciente não encontrado' })
        }
        return res.json(searchPatient)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}


module.exports = { patientListCpf }