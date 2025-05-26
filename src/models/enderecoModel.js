var database = require("../database/config");

async function cadastrar(rua, numero, bairro, cidade, estado, cep) {
  const instrucaoSql = `
    INSERT INTO tb_enderecos (rua, numero, bairro, cidade, estado, cep)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  return database.executar(instrucaoSql, [rua, numero, bairro, cidade, estado, cep]);
}

module.exports = { cadastrar };
