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


function obterGraficoFatoresEstado(req, res) {
var capital = req.params.capital
    dashboardModel.obterGraficoFatoresEstado(capital).then (
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

function coletarObesidadePorSexo(req, res) {
    dashboardModel.coletarObesidadePorSexo().then (
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

function coletarPercentualObesidade(req, res) {

    dashboardModel.coletarPercentualObesidade().then (
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

function obterGraficoSexoEstado(req, res) {
var capital = req.params.capital

    dashboardModel.obterGraficoSexoEstado(capital).then (
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

function obterGraficoIdadeEstado(req, res) {
var capital = req.params.capital

    dashboardModel.obterGraficoIdadeEstado(capital).then (
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



function coletarGraficoImc(req, res) {

    dashboardModel.coletarGraficoImc().then (
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

function coletarObesidadeIdade(req, res) {

    dashboardModel.coletarObesidadeIdade().then (
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

// Dash Sergipe

function coletarObesidadeIdadeSergipe(req, res) {

    dashboardModel.coletarObesidadeIdadeSergipe().then (
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

function coletarObesidadePorSexoSergipe(req, res) {

    dashboardModel.coletarObesidadePorSexoSergipe().then (
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

function obterGraficoFatoresSergipe(req, res) {

    dashboardModel.obterGraficoFatoresSergipe().then (
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


function coletarMaiorIMCSergipe(req, res) {

    dashboardModel.coletarMaiorIMCSergipe().then (
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

function coletarMaiorFatorSergipe(req, res) {

    dashboardModel.coletarMaiorFatorSergipe().then (
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

function coletarMediaIMCSergipe(req, res) {

    dashboardModel.coletarMediaIMCSergipe().then (
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