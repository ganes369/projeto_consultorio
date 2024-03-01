const knex = require('../../models/connection')
const validate = require('cpf-rg-validator')

const patientCreate = async (req, res) => {
    const { nome, telefone, endereco, cidade, cpf, rg, convenio, codigo_carteira_saude,
        medico_principal, data_nascimento } = req.body



    try {

        const cpfvalidate = validate.cpf(cpf)

        const rgvalidate = validate.rg(rg)


        if (!cpfvalidate) {
            return res.status(400).json({
                mensagem:
                    "insira um cpf válido no formto xxx.xxx.xxx-xx"
            })
        }

        if (!rgvalidate) {
            return res.status(400).json({
                mensagem:
                    "insira um rg válido"
            })
        }

        const searchPatientCpf = await knex('pacientes')
            .where({ cpf })
            .first()

        const searchPatientRg = await knex('pacientes')
            .where({ rg })
            .first()


        if (searchPatientRg) {
            return res.status(400).json({
                mensagem: "já existe paciente cadastrado com o rg informado"
            })
        }

        if (searchPatientCpf) {
            return res.status(400).json({
                mensagem: "já existe paciente cadastrado com o cpf informado"
            })
        }


        const createPatient = await knex('pacientes')
            .insert({
                nome,
                telefone,
                endereco,
                cidade,
                cpf,
                rg,
                convenio,
                codigo_carteira_saude,
                medico_principal,
                data_nascimento
            })
            .returning('*')

        return res.status(201).json(createPatient)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}



module.exports = { patientCreate }