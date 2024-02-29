const knex = require('../../models/connection')

const healthInsuranceUpdate = async (req, res) => {
    const { nome, convenio, codigo_referenciado, usuario, senha } = req.body
    const { id } = req.params

    try {


        if (!nome && !convenio && !codigo_referenciado && !usuario && !senha) {
            return res.status(400).json({
                mensagem: "Informe ao menos um campo para ser atualizado"
            })
        }

        const searchHealthInsurance = await knex('convenios')
            .where({ id })
            .first()

        if (!searchHealthInsurance) {
            return res.status(404).json({
                mensagem: "Convênio informado não encontrado"
            })
        }




        const updateHealthInsurance = await knex('convenios')
            .update({
                nome,
                convenio,
                codigo_referenciado,
                usuario,
                senha
            })
            .where({ id })
            .returning('*')

        return res.status(201).json(updateHealthInsurance)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}



module.exports = { healthInsuranceUpdate }