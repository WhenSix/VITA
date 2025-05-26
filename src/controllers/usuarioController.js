var usuarioModel = require("../models/usuarioModel");

function cadastrarUsuario() {
  const nome = document.querySelector("#nome_usuario").value;
  const email = document.querySelector("#email_usuario").value;
  const senha = document.querySelector("#senha_usuario").value;
  const confirmarSenha = document.querySelector("#confirmar_senha").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeServer: nome,
      emailServer: email,
      senhaServer: senha
    })
  })
    .then(res => {
      if (res.ok) {
        document.querySelector("#form-usuario").style.display = "none";
        document.querySelector("#form-empresa").style.display = "block";
      } else {
        res.text().then(texto => alert(texto));
      }
    })
    .catch(err => {
      console.error("Erro na requisição:", err);
    });
}


async function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        return res.status(400).send("Seu email está undefined!");
    } 
    if (senha == undefined) {
        return res.status(400).send("Sua senha está indefinida!");
    }

    try {
        const resultadoAutenticar = await usuarioModel.autenticar(nome, senha);
        if (resultadoAutenticar) {
            res.json(resultadoAutenticar);
        } else {
            res.status(403).send("Nome e/ou senha inválido(s)");
        }
    } catch (erro) {
        console.error("Erro ao autenticar usuário: ", erro);
        res.status(500).json(erro.message);
    }
}

const usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    const { nomeServer, emailServer, senhaServer } = req.body;

    if (!nomeServer || !emailServer || !senhaServer) {
        return res.status(400).json({ erro: "Campos obrigatórios ausentes." });
    }

    usuarioModel.cadastrar(nomeServer, emailServer, senhaServer)
        .then(resultado => {
            const idUsuario = resultado.insertId;
            res.status(201).json({ mensagem: "Usuário cadastrado com sucesso", idUsuario });
        })
        .catch(erro => {
            console.error("Erro ao cadastrar usuário:", erro.sqlMessage || erro);
            res.status(500).json({ erro: "Erro ao cadastrar usuário." });
        });
}

module.exports = {
    autenticar,
    cadastrar
};
