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

// Dash Sergipe

router.get("/coletarObesidadeIdadeSergipe", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarObesidadeIdadeSergipe(req, res);
});

router.get("/coletarObesidadePorSexoSergipe", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarObesidadePorSexoSergipe(req, res);
});

router.get("/obterGraficoFatoresSergipe", (req, res) => {
  console.log("oi estou no router")

  dashboardController.obterGraficoFatoresSergipe(req, res);
});

router.get("/coletarMaiorIMCSergipe", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarMaiorIMCSergipe(req, res);
});


router.get("/coletarMaiorFatorSergipe", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarMaiorFatorSergipe(req, res);
});

router.get("/coletarMediaIMCSergipe", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarMediaIMCSergipe(req, res);
});





module.exports = router;