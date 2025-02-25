var usuarioModel = require("../models/usuarioModel");

async function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    } 
    if (senha == undefined) {
        return res.status(400).send("Sua senha está indefinida!");
    }

    try {
        const resultadoAutenticar = await usuarioModel.autenticar(email, senha);
        if (resultadoAutenticar) {
            res.json(resultadoAutenticar);
        } else {
            res.status(403).send("Email e/ou senha inválido(s)");
        }
    } catch (erro) {
        console.error("Erro ao autenticar usuário: ", erro);
        res.status(500).json(erro.message);
    }
}

async function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        return res.status(400).send("Seu nome está undefined!");
    } 
    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    } 
    if (senha == undefined) {
        return res.status(400).send("Sua senha está undefined!");
    } 
    

    try {
        const resultado = await usuarioModel.cadastrar(nome, email, senha);
        res.json(resultado);
    } catch (erro) {
        console.error("Erro ao cadastrar usuário: ", erro);
        res.status(500).json({ erro: erro.message });

    }
}

module.exports = {
    autenticar,
    cadastrar
};
