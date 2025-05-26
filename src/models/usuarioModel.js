const database = require("../database/config")

const bcrypt = require('bcryptjs');

async function autenticar(nome, senha) {
    console.log("Autentificando usuario: ", nome);

    const instrucaoSql = `SELECT * FROM tb_usuario WHERE nome_usuario = '${nome}'`;
    try {
        const resultado = await database.executar(instrucaoSql);

        if (resultado.length === 0) {
            throw new Error("Usuário não encontrado");
        }

        const usuario = resultado[0];

        const senhaCerta = await bcrypt.compare(senha, usuario.senha_usuario);

        if (!senhaCerta) {
            throw new Error("Senha incorreta");
        }

        delete usuario.senha_usuario;  
        return usuario;

    } catch (erro) {
        console.error("Erro ao autenticar usuário: ", erro);
        throw erro;
    }
}




async function cadastrar(nome, email, senha) {
  console.log("Cadastrando usuario:", nome, email);

  if (!nome || !email || !senha) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  const hash = await bcrypt.hash(senha, 10);

  const instrucaoSql = `
  INSERT INTO tb_usuario (nome_usuario, email_usuario, senha_usuario) 
  VALUES ('${nome}', '${email}', '${hash}');
`;

  try {
    const resultado = await database.executar(instrucaoSql, [nome, email, hash]);
    return resultado;
  } catch (erro) {
    console.error("Erro ao cadastrar usuário:", erro);
    throw erro;
  }
}


module.exports = {
    autenticar,
    cadastrar
};