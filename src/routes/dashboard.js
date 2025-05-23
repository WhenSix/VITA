var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/obterGraficoFatores", (req, res) => {
  console.log("oi estou no router")

  dashboardController.obterGraficoFatores(req, res);
});

router.get("/coletarMaiorIMC", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarMaiorIMC(req, res);
});

router.get("/coletarMaiorFator", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarMaiorFator(req, res);
});

router.get("/coletarMediaIMC", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarMediaIMC(req, res);
});


router.get("/obterGraficoFatoresEstado/:capital", (req, res) => {
  console.log("oi estou no router do fatores")

  dashboardController.obterGraficoFatoresEstado(req, res);
});

router.get("/obterGraficoSexoEstado/:capital", (req, res) => {
  console.log("oi estou no router do fatores")

  dashboardController.obterGraficoSexoEstado(req, res);
});

router.get("/obterGraficoIdadeEstado/:capital", (req, res) => {
  console.log("oi estou no router do fatores")

  dashboardController.obterGraficoIdadeEstado(req, res);
});




router.get("/coletarPercentualObesidade", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarPercentualObesidade(req, res);
});

router.get("/coletarObesidadePorSexo", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarObesidadePorSexo(req, res);
});

router.get("/coletarGraficoImc", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarGraficoImc(req, res);
});

router.get("/coletarObesidadeIdade", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarObesidadeIdade(req, res);
});










module.exports = router;