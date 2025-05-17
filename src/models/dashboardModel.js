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

function coletarMaiorFator(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
       SELECT 
    fator,
    ROUND(100.0 * SUM(obesidade) / COUNT(*), 2) AS percentual_obesos
FROM (
    SELECT 
        CASE 
            WHEN (peso / (altura * altura)) * 10000 > 30 THEN 1
            ELSE 0
        END AS obesidade,

        CASE
            WHEN exercicio_fisico = 0 OR freq_exercicio_fisico = 0 THEN 'Sedentárismo'
            WHEN alcoolismo = 1 THEN 'Alcoolismo'
            WHEN qtd_cigarros_dia = 1 THEN 'Fumante'
            ELSE 'nenhum'
        END AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)  
) AS sub
WHERE fator != 'nenhum' 
GROUP BY fator
ORDER BY percentual_obesos DESC limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    coletarMaiorIMC,
    coletarMaiorFator
}
