var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresaController");

router.post("/cadastrar", empresaController.cadastrarEmpresa);

module.exports = router;

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    empresaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  empresaController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  empresaController.listar(req, res);
});

const db = require("../database/config");

function cadastrarEmpresa(razaoSocial, cnpj, endereco, idUsuario) {
  const instrucaoSql = `
    INSERT INTO empresa (razao_social, cnpj, endereco, fk_usuario)
    VALUES (?, ?, ?, ?)
  `;

  return db.execute(instrucaoSql, [razaoSocial, cnpj, endereco, idUsuario]);
}

module.exports = {
  cadastrarEmpresa
};

module.exports = router;