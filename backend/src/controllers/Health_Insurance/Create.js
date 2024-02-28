const knex = require('../../models/connection')

const healthInsuranceCreate = async (req, res) => {
    const { nome, tipo_convenio, codigo_referenciado, usuario, senha } = req.body

    try {


        const searchHealthInsurance = await knex('convenios')
            .where({ nome })
            .first()

        if (searchHealthInsurance) {
            return res.status(400).json({ mensagem: "O plano informado já está cadastrado" })
        }


        const createHealthInsurance = await knex('convenios')
            .insert({
                nome,
                tipo_convenio,
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