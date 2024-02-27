const knex = require("../../models/connection")

const patientUpdate = async (req, res) => {
    const { nome_completo, rg, cpf, convenio, celular } = req.body
    const { id } = req.params

    try {

        const searchPatient = await knex('pacientes')
            .where({ id })
            .first()

        if (!searchPatient) {
            return res.status(404).json({ mensagem: 'Paciente não encontrado' })
        }

        if (cpf) {

            const searchPatientCpf = await knex('pacientes')
                .where({ cpf })
                .first()

            if (searchPatientCpf) {
                return res.status(400).json({
                    mensagem: 'já existe paciente cadastrado com o cpf informado'
                })
            }
        }

        if (rg) {

            const searchPatientRg = await knex('pacientes')
                .where({ rg })
                .first()

            if (searchPatientRg) {
                return res.status(400).json({
                    mensagem: "já existe paciente cadastrado com o rg informado"
                })
            }
        }


        const updadePacient = await knex('pacientes')
            .update({
                nome_completo,
                rg,
                cpf,
                convenio,
                celular
            })
            .where({ id })
            .returning('*')

        return res.json(updadePacient)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}


module.exports = { patientUpdate }