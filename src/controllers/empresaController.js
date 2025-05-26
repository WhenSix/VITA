var empresaModel = require("../models/empresaModel");

const empresaModel = require("../models/empresaModel");

function cadastrarEmpresa(req, res) {
  const { razaoSocial, cnpj, endereco, fkUsuario } = req.body;

  if (!razaoSocial || !cnpj || !endereco || !fkUsuario) {
    return res.status(400).json({ erro: "Campos obrigatórios ausentes." });
  }

  empresaModel.cadastrarEmpresa(razaoSocial, cnpj, endereco, fkUsuario)
    .then(resultado => {
      res.status(201).json({ mensagem: "Empresa cadastrada com sucesso", resultado });
    })
    .catch(erro => {
      console.error("Erro ao cadastrar empresa:", erro.sqlMessage || erro);
      res.status(500).json({ erro: "Erro no servidor ao cadastrar empresa." });
    });
}

module.exports = {
  cadastrarEmpresa
};



function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  cadastrar,
};
