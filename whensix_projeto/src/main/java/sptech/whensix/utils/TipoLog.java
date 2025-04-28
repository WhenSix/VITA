package sptech.whensix.utils;

public enum TipoLog {
    READ_START("Iniciando leitura de arquivo..."),
    READ_SUCESS("Leitura de arquivo finalizada"),
    READ_CELL_ERROR("Falha na célula"),
    READ_ERROR("Falha na leitura de arquivo"),
    LOAD_START("Inserindo dados no banco..."),
    LOAD_SUCESS("Inserção de dados feita com sucesso"),
    LOAD_ERROR("Falha na inserção de dados...");

    private final String mensagem;

    TipoLog(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getMensagem() {
        return mensagem;
    }
}