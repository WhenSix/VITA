USE whensix;

CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(45) NOT NULL,
    email_usuario VARCHAR(200) NOT NULL UNIQUE,
    telefone_usuario CHAR(11),
    dt_nasc_usuario DATE,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    login_usuario VARCHAR(45) DEFAULT NULL UNIQUE,
    senha_usuario VARCHAR(255) NOT NULL, -- Armazene o hash da senha aqui
    master_usuario BOOLEAN DEFAULT FALSE,
    fk_empresa INT,
    FOREIGN KEY (fk_empresa) REFERENCES tb_empresa(id_empresa)
);

CREATE TABLE tb_enderecos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rua VARCHAR(100) NOT NULL,
  numero VARCHAR(10) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  cep VARCHAR(9) NOT NULL
);

CREATE TABLE tb_empresas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  razao_social VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) NOT NULL UNIQUE,
  codigo_ativacao VARCHAR(64),
  endereco_id INT,
  FOREIGN KEY (endereco_id) REFERENCES tb_enderecos(id)
);


CREATE TABLE tb_log (
    id_log INT PRIMARY KEY AUTO_INCREMENT,
    msg_log VARCHAR(45),
    dt_log DATETIME DEFAULT CURRENT_TIMESTAMP,
    nivel_log VARCHAR(100),
    categoria_log VARCHAR(100),
    linha_log INT,
    erros_na_linha INT
);

CREATE TABLE tb_dado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cdg_cidade INT NOT NULL,
    idade INT NOT NULL,
    sexo INT NOT NULL,
    peso FLOAT NOT NULL,
    altura INT NOT NULL,
    frequencia_refri INT NOT NULL,
    qtd_refri INT NOT NULL,
    tipo_refri INT NOT NULL, 
    alcoolismo BOOLEAN NOT NULL,
    freq_alcool INT NOT NULL,
    exercicio_fisico BOOLEAN NOT NULL,
    tipo_exercicio_fisico INT NOT NULL,
    freq_exercicio_fisico INT NOT NULL,
    fumante BOOLEAN NOT NULL,
    pesorake DOUBLE NOT NULL,
    imc FLOAT NOT NULL,
    excpeso BOOLEAN NOT NULL,
    obesidade BOOLEAN NOT NULL,
    depressao BOOLEAN NOT NULL
);


