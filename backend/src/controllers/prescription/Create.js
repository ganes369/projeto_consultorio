const knex = require("../../models/connection");
const { isValid, parse } = require("date-fns")

const prescriptionCreate = async (req, res) => {
    const { data, medico, receituario } = req.body


    const validateData = parse(data, "dd/MM/yyyy", new Date())

    if (+validateData > +new Date()) {
        return res.status(400).json({
            mensagem: "a data informada é maior que a data atual"
        })
    }

    if (!isValid(validateData)) {
        return res.status(400).json({
            mensagem: "por favor informe uma data válida no formato dd/mm/aaaa"
        })
    }

    let data2 = data.replaceAll('/', ",")
    data2 = data2.split(',')
    data2 = new Date(data2[2], data2[1] - 1, data2[0])
    const opcao = { month: `long` }
    let mes = data2.toLocaleString(`pt-Br`, opcao)
    mes = mes.toString()[0].toUpperCase() + mes.toString().slice(1)

    try {

        const createPrescription = await knex('controle_receituarios')
            .insert({
                data,
                medico,
                receituario,
                mes
            }).returning('*')

        return res.status(201).json(createPrescription)

    } catch (error) {
        return res.status(500).json({ mensgem: error.message });
    }
}


module.exports = { prescriptionCreate }