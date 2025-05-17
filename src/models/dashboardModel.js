var database = require("../database/config");

function coletarMaiorIMC() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
   SELECT 
   truncate(max(peso/ (altura * altura)) * 10000, 2) as 'maior_imc'
    FROM 
    tb_dado
    where peso not in (888, 777) and altura not in (888, 777);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    coletarMaiorIMC
}
