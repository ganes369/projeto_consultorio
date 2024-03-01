const knex = require('../../models/connection')
const { validate } = require('validator-cpf-cnpj')

const patientCreate = async (req, res) => {
    const { nome, telefone, endereco, cidade, cpf, rg, convenio, codigo_carteira_saude,
        medico_principal, data_nascimento } = req.body



    try {

        function validateRegexCPF(cpf) {
            let validateCpf = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/
            if (cpf.match(validateCpf)) {
                return true;
            } else {
                return false;
            }
        }

        if (!validateRegexCPF(cpf)) {

            return res.status(400).json({
                mensagem: "insira um cpf no formato XXX.XXX.XXX-XX"
            })

        }

        const cpfvalidate = validate(cpf)


        if (!cpfvalidate) {
            return res.status(400).json({
                mensagem:
                    "insira um cpf válido no formto XXX.XXX.XXX-XX"
            })
        }


        const searchPatientCpf = await knex('pacientes')
            .where({ cpf })
            .first()

        const searchPatientRg = await knex('pacientes')
            .where({ rg })
            .first()

        if (searchPatientCpf) {
            return res.status(400).json({
                mensagem: "já existe paciente cadastrado com o cpf informado"
            })
        }

        if (searchPatientRg) {
            return res.status(400).json({
                mensagem: "já existe paciente cadastrado com o rg informado"
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