const knex = require('../../models/connection')

const healthInsuranceCreate = async (req, res) => {
    const { convenio, valor_consulta, tipo_cobranca, profissional_1, profissional_2,
        profissional_3, profissional_4, profissional_5, profissional_6, profissional_7,
        codigo_referenciado, usuario, senha } = req.body


    try {

        const searchHealthInsurance = await knex('convenios')
            .whereILike('convenio', convenio)
            .first()

        if (searchHealthInsurance) {
            return res.status(400).json({ mensagem: "O plano informado já está cadastrado" })
        }


        const createHealthInsurance = await knex('convenios')
            .insert({
                convenio,
                valor_consulta,
                tipo_cobranca,
                profissional_1,
                profissional_2,
                profissional_3,
                profissional_4,
                profissional_5,
                profissional_6,
                profissional_7,
                codigo_referenciado,
                usuario,
                senha
            })
            .returning('*')

        return res.status(201).json(createHealthInsurance)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}



module.exports = { healthInsuranceCreate }