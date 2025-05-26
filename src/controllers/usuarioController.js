var usuarioModel = require("../models/usuarioModel");

async function autenticar(req, res) {
    const { nome, senha } = req.body;

    if (!nome || !senha) {
        return res.status(400).json({ mensagem: "nome e senha são obrigatórios." });
    }

    try {
        const resultadoAutenticar = await usuarioModel.autenticar(nome, senha);
        if (resultadoAutenticar) {
            res.json(resultadoAutenticar);
        } else {
            res.status(403).json({ mensagem: "nome e/ou senha inválido(s)" });
        }
    } catch (erro) {
        console.error("Erro ao autenticar usuário: ", erro);
        res.status(500).json({ erro: erro.message });
    }
}

async function cadastrar(req, res) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Nome, email e senha são obrigatórios." });
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
