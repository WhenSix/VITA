var database = require("../database/config");

async function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM tb_empresas WHERE cnpj = ?`;
  return database.executar(instrucaoSql, [cnpj]);
}

async function cadastrar(razaoSocial, cnpj, enderecoId) {
  var instrucaoSql = `
    INSERT INTO tb_empresas (razao_social, cnpj, endereco_id)
    VALUES (?, ?, ?)
  `;
  return database.executar(instrucaoSql, [razaoSocial, cnpj, enderecoId]);
}

async function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM tb_empresas WHERE id = ?`;
  return database.executar(instrucaoSql, [id]);
}

async function listar() {
  var instrucaoSql = `
    SELECT e.id, e.razao_social, e.cnpj, e.codigo_ativacao, 
           end.rua, end.numero, end.bairro, end.cidade, end.estado, end.cep
    FROM tb_empresas e
    JOIN tb_enderecos end ON e.endereco_id = end.id
  `;
  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
