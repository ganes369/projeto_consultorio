const knex = require('../../models/connection')

const patientCreate = async (req, res) => {
    const { nome_completo, rg, cpf, convenio, celular } = req.body

    try {


        const searchPatientCpf = await knex('pacientes')
            .where({ cpf })
            .first()

        const searchPatientRg = await knex('pacientes')
            .where({ rg })
            .first()


        if (searchPatientRg) {
            return res.status(400).json({ mensagem: "já existe paciente cadastrado com o rg informado" })
        }

        if (searchPatientCpf) {
            return res.status(400).json({ mensagem: "já existe paciente cadastrado com o cpf informado" })
        }


        const createPatient = await knex('pacientes')
            .insert({
                nome_completo,
                rg,
                cpf,
                convenio,
                celular
            })
            .returning('*')

        return res.status(201).json(createPatient)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}



module.exports = { patientCreate }