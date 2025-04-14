USE whensix;

CREATE TABLE tb_log (
    id_log INT PRIMARY KEY AUTO_INCREMENT,
    msg_log VARCHAR(45),
    dt_log DATETIME DEFAULT CURRENT_TIMESTAMP,
    modulo_log VARCHAR(100),
    categoria_log VARCHAR(100)
);

CREATE TABLE tb_endereco (
    id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    CEP CHAR(8) NOT NULL,
    logradouro_endereco VARCHAR(100) NOT NULL,
    bairro_endereco VARCHAR(45) NOT NULL,
    numero_endereco VARCHAR(45),
    complemento_endereco VARCHAR(100)
);

CREATE TABLE tb_tipo_empresa (
    id_tipo INT PRIMARY KEY AUTO_INCREMENT,
    nome_tipo VARCHAR(45) NOT NULL,
    descricao_tipo VARCHAR(100)
);

CREATE TABLE tb_empresa (
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    razao_social_empresa VARCHAR(45) NOT NULL,
    cnpj_empresa VARCHAR(45) NOT NULL UNIQUE,
    nome_fantasia_empresa VARCHAR(45),
    dt_criacao_empresa DATE,
    fk_tipo_empresa INT,
    fk_endereco_empresa INT,
    FOREIGN KEY (fk_tipo_empresa) REFERENCES tb_tipo_empresa(id_tipo),
    FOREIGN KEY (fk_endereco_empresa) REFERENCES tb_endereco(id_endereco)
);

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


CREATE TABLE tb_dado(
    id_dado INT PRIMARY KEY AUTO_INCREMENT,
    cdg_cidade INT,
    sexo CHAR(1),
    peso FLOAT(5,2),
    altura INT,
    frequencia_refri CHAR(1),
    tipo_refri CHAR(1),
    qtd_refri CHAR(1),
    alcoolismo BOOLEAN,
    freq_alcool CHAR(1),
    exercicio_fisico CHAR(1),
    tipo_exercicio_fisico CHAR(1),
    freq_exercicio_fisico CHAR(1),
    fumante BOOLEAN,
    qtd_cigarros_dia INT,
)