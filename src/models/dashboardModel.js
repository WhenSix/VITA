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
    ROUND(100.0 * COUNT(*) / (
        SELECT COUNT(*)
        FROM tb_dado 
        WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
          AND (peso / (altura * altura)) * 10000 > 30
    ), 2) AS percentual_obesos
FROM (
    SELECT 'Sedentarismo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND (freq_exercicio_fisico = 1 OR freq_exercicio_fisico = 0)

    UNION ALL

    SELECT 'Alcoolismo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND freq_alcool < 6

    UNION ALL

    SELECT 'Fumo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND fumante = 1 OR fumante = 2

    UNION ALL

    SELECT 'Refrigerante' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND frequencia_refri > 1
) AS sub
GROUP BY fator
ORDER BY percentual_obesos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletarMediaIMC(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
 SELECT 
  ROUND(AVG((peso / (altura * altura)) * 10000), 2) AS media_imc
FROM tb_dado
WHERE peso NOT IN (888, 777) 
  AND altura NOT IN (888, 777);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletarPercentualObesidade(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT
  ROUND(100.0 * SUM(CASE 
                     WHEN (peso / (altura * altura)) * 10000 > 30 THEN 1 
                     ELSE 0 
                   END) / COUNT(*), 2) AS percentual_obesidade,
                      ROUND(100.0 * SUM(CASE 
                     WHEN (peso / (altura * altura)) * 10000 > 25 
                          AND (peso / (altura * altura)) * 10000 <= 30 THEN 1 
                     ELSE 0 
                   END) / COUNT(*), 2) AS percentual_sobrepeso
FROM tb_dado
WHERE peso NOT IN (888, 777) 
  AND altura NOT IN (888, 777);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletarObesidadePorSexo(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT 
  sexo,
  CASE 
    WHEN sexo = 1 THEN 'Masculino'
    WHEN sexo = 2 THEN 'Feminino'
    ELSE 'Outros'
  END AS genero,
  COUNT(*) AS total,
  SUM(CASE 
        WHEN (peso / (altura * altura)) * 10000 > 30 THEN 1 
        ELSE 0 
      END) AS obesos
FROM tb_dado
WHERE peso NOT IN (888, 777) 
  AND altura NOT IN (888, 777)
GROUP BY sexo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function obterGraficoFatores(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT 
    fator,
    ROUND(100.0 * COUNT(*) / (
        SELECT COUNT(*)
        FROM tb_dado 
        WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
          AND (peso / (altura * altura)) * 10000 > 30
    ), 2) AS percentual_obesos
FROM (
    SELECT 'Sedentarismo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND (freq_exercicio_fisico = 1 OR freq_exercicio_fisico = 0)

    UNION ALL

    SELECT 'Alcoolismo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND freq_alcool < 6

    UNION ALL

    SELECT 'Fumo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND fumante = 1 OR fumante = 2

    UNION ALL

    SELECT 'Refrigerante' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND frequencia_refri > 1
) AS sub
GROUP BY fator;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterGraficoFatoresEstado(capital){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT 
    fator,
    ROUND(100.0 * COUNT(*) / (
        SELECT COUNT(*)
        FROM tb_dado 
        WHERE cdg_cidade = '${capital}'
          AND peso NOT IN (888, 777) 
          AND altura NOT IN (888, 777)
          AND (peso / (altura * altura)) * 10000 > 30
    ), 2) AS percentual_obesos
FROM (
    SELECT 'Sedentarismo' AS fator
    FROM tb_dado
    WHERE cdg_cidade = '${capital}'
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND ( freq_exercicio_fisico = 1 OR freq_exercicio_fisico = 0)

    UNION ALL

    SELECT 'Alcoolismo' AS fator
    FROM tb_dado
    WHERE cdg_cidade = '${capital}'
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND freq_alcool < 6


    UNION ALL

    SELECT 'Fumo' AS fator
    FROM tb_dado
    WHERE cdg_cidade = '${capital}'
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND fumante = 1 OR fumante = 2

    UNION ALL

    SELECT 'Refrigerante' AS fator
    FROM tb_dado
    WHERE cdg_cidade = '${capital}'
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND frequencia_refri > 1
) AS sub
GROUP BY fator;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterGraficoSexoEstado(capital){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n ");
    var instrucaoSql = `
SELECT 
  CASE 
    WHEN sexo = 1 THEN 'Masculino'
    WHEN sexo = 2 THEN 'Feminino'
    ELSE 'Outros'
  END AS genero,
  COUNT(*) AS total,
  SUM(CASE 
        WHEN (peso / (altura * altura)) * 10000 > 30 THEN 1 
        ELSE 0 
      END) AS obesos
FROM tb_dado
WHERE peso NOT IN (888, 777) 
  AND altura NOT IN (888, 777) AND cdg_cidade = ${capital}
GROUP BY genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterGraficoIdadeEstado(capital){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n ");
    var instrucaoSql = `
SELECT
  CASE
    WHEN idade BETWEEN 0 AND 19 THEN '0-19 anos'
    WHEN idade BETWEEN 20 AND 39 THEN '20-39 anos'
    WHEN idade BETWEEN 40 AND 59 THEN '40-59 anos'
    ELSE '60+ anos'
  END AS faixa_etaria,
  round(100.0 * SUM(CASE WHEN (peso / (altura * altura) * 10000.0) >= 30 THEN 1 ELSE 0 END) / COUNT(*)) AS percentual_obesos
FROM tb_dado
WHERE cdg_cidade = ${capital} 
GROUP BY faixa_etaria
ORDER BY faixa_etaria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function coletarGraficoImc(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n ");
    var instrucaoSql = `
SELECT
  cdg_cidade,
  ROUND(AVG(peso / (altura * altura) * 10000), 2) AS media_imc
FROM tb_dado
WHERE peso NOT IN (888, 777)
  AND altura NOT IN (888, 777)
GROUP BY cdg_cidade;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletarObesidadeIdade(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n ");
    var instrucaoSql = `
SELECT
  CASE
    WHEN idade BETWEEN 0 AND 19 THEN '0-19 anos'
    WHEN idade BETWEEN 20 AND 39 THEN '20-39 anos'
    WHEN idade BETWEEN 40 AND 59 THEN '40-59 anos'
    ELSE '60+ anos'
  END AS faixa_etaria,
  round(100.0 * SUM(CASE WHEN (peso / (altura * altura) * 10000.0) >= 30 THEN 1 ELSE 0 END) / COUNT(*)) AS percentual_obesos
FROM tb_dado
GROUP BY faixa_etaria
ORDER BY faixa_etaria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Dash Sergipe

function coletarObesidadeIdadeSergipe(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n ");
    var instrucaoSql = `
SELECT
  CASE
    WHEN idade BETWEEN 0 AND 19 THEN '0-19 anos'
    WHEN idade BETWEEN 20 AND 39 THEN '20-39 anos'
    WHEN idade BETWEEN 40 AND 59 THEN '40-59 anos'
    ELSE '60+ anos'
  END AS faixa_etaria,
  ROUND(
    100.0 * SUM(CASE WHEN (peso / (altura * altura) * 10000) >= 30 THEN 1 ELSE 0 END) / COUNT(*),
    2
  ) AS percentual_obesos
FROM tb_dado
WHERE cdg_cidade = 1
GROUP BY faixa_etaria
ORDER BY faixa_etaria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletarObesidadePorSexoSergipe(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT 
  sexo,
  CASE 
    WHEN sexo = 1 THEN 'Masculino'
    WHEN sexo = 2 THEN 'Feminino'
    ELSE 'Outros'
  END AS genero,
  COUNT(*) AS total,
  SUM(CASE 
        WHEN (peso / (altura * altura)) * 10000 > 30 THEN 1 
        ELSE 0 
      END) AS obesos
FROM tb_dado
WHERE peso NOT IN (888, 777) 
  AND altura NOT IN (888, 777) AND cdg_cidade = 1
GROUP BY sexo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterGraficoFatoresSergipe(){
       console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT 
    fator,
    ROUND(100.0 * COUNT(*) / (
        SELECT COUNT(*)
        FROM tb_dado 
        WHERE cdg_cidade = 1
          AND peso NOT IN (888, 777) 
          AND altura NOT IN (888, 777)
          AND (peso / (altura * altura)) * 10000 > 30
    ), 2) AS percentual_obesos
FROM (
    SELECT 'Sedentarismo' AS fator
    FROM tb_dado
    WHERE cdg_cidade = 1
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND ( freq_exercicio_fisico = 1 OR freq_exercicio_fisico = 0)

    UNION ALL

    SELECT 'Alcoolismo' AS fator
    FROM tb_dado
    WHERE cdg_cidade = 1
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND freq_alcool < 6


    UNION ALL

    SELECT 'Fumo' AS fator
    FROM tb_dado
    WHERE cdg_cidade = 1
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND fumante = 1 OR fumante = 2

    UNION ALL

    SELECT 'Refrigerante' AS fator
    FROM tb_dado
    WHERE cdg_cidade = 1
      AND peso NOT IN (888, 777) 
      AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND frequencia_refri > 1
) AS sub
GROUP BY fator;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function coletarMaiorIMCSergipe() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
 SELECT 
   truncate(max(peso/ (altura * altura)) * 10000, 2) as 'maior_imc'
    FROM 
    tb_dado
    where peso not in (888, 777) and altura not in (888, 777) and cdg_cidade = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletarMaiorFatorSergipe() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT 
    fator,
    ROUND(100.0 * COUNT(*) / (
        SELECT COUNT(*)
        FROM tb_dado 
        WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
          AND (peso / (altura * altura)) * 10000 > 30 AND cdg_cidade = 1
    ), 2) AS percentual_obesos
FROM (
    SELECT 'Sedentarismo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30 AND cdg_cidade = 1
      AND (freq_exercicio_fisico = 1 OR freq_exercicio_fisico = 0) 

    UNION ALL

    SELECT 'Alcoolismo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND freq_alcool < 6 AND cdg_cidade = 1

    UNION ALL

    SELECT 'Fumo' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30 AND cdg_cidade = 1
      AND fumante = 1 OR fumante = 2 

    UNION ALL

    SELECT 'Refrigerante' AS fator
    FROM tb_dado
    WHERE peso NOT IN (888, 777) AND altura NOT IN (888, 777)
      AND (peso / (altura * altura)) * 10000 > 30
      AND frequencia_refri > 1 AND cdg_cidade = 1
) AS sub
GROUP BY fator
ORDER BY percentual_obesos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletarMediaIMCSergipe() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
 SELECT 
  ROUND(AVG((peso / (altura * altura)) * 10000), 2) AS media_imc
FROM tb_dado
WHERE peso NOT IN (888, 777) 
  AND altura NOT IN (888, 777) and cdg_cidade = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    coletarMaiorIMC,
    coletarMaiorFator,
    coletarMediaIMC,
    obterGraficoFatores,
    obterGraficoFatoresEstado,
    coletarPercentualObesidade,
    coletarObesidadePorSexo,
    obterGraficoSexoEstado,
    coletarGraficoImc,
    coletarObesidadeIdade,
    obterGraficoIdadeEstado,
    coletarObesidadeIdadeSergipe,
    coletarObesidadePorSexoSergipe,
    obterGraficoFatoresSergipe,
    coletarMaiorIMCSergipe,
    coletarMaiorFatorSergipe,
    coletarMediaIMCSergipe
}
