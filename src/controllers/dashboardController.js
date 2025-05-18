var dashboardModel = require("../models/dashboardModel.js");

function coletarMaiorIMC(req, res) {

    dashboardModel.coletarMaiorIMC().then (
        function (resultado) {
            console.log('Retornei o Model')
            res.json({
                resultado: resultado
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao enviar os dados da tentativa. Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function coletarMediaIMC(req, res) {

    dashboardModel.coletarMediaIMC().then (
        function (resultado) {
            console.log('Retornei o Model')
            res.json({
                resultado: resultado
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao enviar os dados da tentativa. Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function coletarMaiorFator(req, res) {

    dashboardModel.coletarMaiorFator().then (
        function (resultado) {
            console.log('Retornei o Model')
            res.json({
                resultado: resultado
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao enviar os dados da tentativa. Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function obterGraficoFatores(req, res) {

    dashboardModel.obterGraficoFatores().then (
        function (resultado) {
            console.log('Retornei o Model')
            res.json({
                resultado: resultado
            });
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao enviar os dados da tentativa. Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
  coletarMaiorIMC,
  coletarMaiorFator,
  coletarMediaIMC,
  obterGraficoFatores
}