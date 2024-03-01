const { validate } = require("validator-cpf-cnpj")
const knex = require("../../models/connection")

const patientUpdate = async (req, res) => {
    const { nome, telefone, endereco, cidade, cpf, rg, convenio, codigo_carteira_saude,
        medico_principal, data_nascimento } = req.body

    const { id } = req.params

    try {

        if (!nome && !telefone && !endereco && !cidade && !cpf && !rg && !convenio &&
            !codigo_carteira_saude && !medico_principal && !data_nascimento) {

            return res.status(400).json({
                mensagem: "Informe ao menos um campo para ser atualizado"
            })
        }

        const searchPatient = await knex('pacientes')
            .where({ id })
            .first()

        if (!searchPatient) {
            return res.status(404).json({ mensagem: 'Paciente não encontrado' })
        }

        if (cpf) {

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

            const cpfvalidate = validate.cpf(cpf)

            if (!cpfvalidate) {
                return res.status(400).json({
                    mensagem: "insira um cpf válido no formto XXX.XXX.XXX-XX"
                })
            }

            const searchPatientCpf = await knex('pacientes')
                .where({ cpf })
                .first()

            if (searchPatientCpf && searchPatient.cpf != cpf) {
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
            .where({ id })
            .returning('*')

        return res.json(updadePacient)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: error.message })
    }
}


module.exports = { patientUpdate }