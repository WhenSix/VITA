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
module.exports = router;