var enderecoModel = require("../models/enderecoModel");

async function cadastrar(req, res) {
  const { rua, numero, bairro, cidade, estado, cep } = req.body;

  if (!rua || !numero || !bairro || !cidade || !estado || !cep) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  try {
    const resultado = await enderecoModel.cadastrar(rua, numero, bairro, cidade, estado, cep);
    console.log(resultado)
    return res.status(201).json({ mensagem: "Endereço cadastrado com sucesso.", resultado });
  } catch (erro) {
    console.error("Erro ao cadastrar endereço:", erro);
    return res.status(500).json({ mensagem: "Erro ao cadastrar endereço.", erro });
  }
}

module.exports = { cadastrar };