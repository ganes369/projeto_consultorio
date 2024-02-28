const knex = require("../../models/connection")


const healthInsuranceList = async (req, res) => {
    const { nome } = req.body

    try {

        if (!nome) {
            const searchHealthInsurance = await knex('convenios')
                .orderBy('nome')

            return res.json(searchHealthInsurance)
        }

        const searchHealthInsurance = await knex('convenios')
            .whereILike('nome', nome)
            .first()

        if (!searchHealthInsurance) {
            return res.status(404).json({ mensagem: 'Convênio não encontrado' })
        }
        return res.json(searchHealthInsurance)

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}


module.exports = { healthInsuranceList }