package sptech.whensix.excel;

public class ResultadoLeitura {
    private int sucessos;
    private int erros;

    public ResultadoLeitura(int sucessos, int erros) {
        this.sucessos = sucessos;
        this.erros = erros;
    }

    public int getSucessos() {
        return sucessos;
    }

    public int getErros() {
        return erros;
    }
}
