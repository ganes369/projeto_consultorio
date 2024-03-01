const knex = require("../../models/connection")


const healthInsuranceList = async (req, res) => {
    const { convenio } = req.body

    try {

        if (!convenio) {
            const searchHealthInsurance = await knex('convenios')
                .orderBy('convenio')

            return res.json(searchHealthInsurance)
        }

        const searchHealthInsurance = await knex('convenios')
            .whereILike('convenio', convenio)
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