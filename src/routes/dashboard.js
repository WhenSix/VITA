var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/coletarMaiorIMC", (req, res) => {
  console.log("oi estou no router")

  dashboardController.coletarMaiorIMC(req, res);
});


module.exports = router;