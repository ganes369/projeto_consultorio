const knex = require('../../models/connection')

const healthInsuranceUpdate = async (req, res) => {
    const { nome, tipo_convenio, codigo_referenciado, usuario, senha } = req.body

    try {

        if (nome) {
            const searchHealthInsurance = await knex('convenios')
                .where('nome', nome)
                .first()

            if (searchHealthInsurance) {
                return res.status(400).json({ mensagem: "O plano informado já está cadastrado" })
            }
        }

        const updateHealthInsurance = await knex('convenios')
            .update({
                nome,
                tipo_convenio,
                codigo_referenciado,
                usuario,
                senha
            })
            .returning('*')

        return res.status(201).json(updateHealthInsurance)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}



module.exports = { healthInsuranceUpdate }