var empresaModel = require("../models/empresaModel");

async function cadastrar(req, res) {
  const { razaoSocial, cnpj } = req.body;

  if (!razaoSocial || !cnpj) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
  }

  try {
    const empresas = await empresaModel.buscarPorCnpj(cnpj);
    if (empresas.length > 0) {
      return res.status(409).json({ mensagem: `A empresa com o CNPJ ${cnpj} já existe.` });
    }

    const resultado = await empresaModel.cadastrar(razaoSocial, cnpj);
    return res.status(201).json({ mensagem: "Empresa cadastrada com sucesso.", resultado });
  } catch (erro) {
    console.error("Erro ao cadastrar empresa:", erro);
    return res.status(500).json({ mensagem: "Erro ao cadastrar empresa.", erro });
  }
}

module.exports = { cadastrar };
