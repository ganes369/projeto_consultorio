const knex = require("../../models/connection");

const doctorCreate = async (req, res) => {
  const {
    nome_completo,
    telefone1,
    telefone2,
    telefone3,
    numero_sala,
    conselho,
    obs,
  } = req.body;

  try {
    const create = await knex("medicos")
      .insert({
        nome_completo,
        telefone1,
        telefone2,
        telefone3,
        numero_sala,
        conselho,
        obs,
      })
      .returning("*");
    return res.status(201).json(create);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = { doctorCreate };
