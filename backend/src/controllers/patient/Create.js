const knex = require('../../models/connection')

const createPatient = async (req, res) => {
    const { nome_completo, rg, cpf, convenio, celular } = req.body

    try {

        const patientCreate = await knex('pacientes')
            .insert({
                nome_completo,
                rg,
                cpf,
                convenio,
                celular
            })
            .returning('*')

        return res.status(201).json(patientCreate)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}




module.exports = { createPatient }