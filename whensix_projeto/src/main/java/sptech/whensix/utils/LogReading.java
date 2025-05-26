package sptech.whensix.utils;

public class LogReading extends LogBaseAbstract {
    private int linha;
    private int coluna;

    public LogReading(TipoLog tipo, int linha, int coluna) {
        super(NivelLog.INFO, tipo);
        this.linha = linha;
        this.coluna = coluna;
    }

    @Override
    public String CreateLog() {
        System.out.printf("[%s][%s][%s] - %s - linha: %d | coluna: %d%n",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem(),linha, coluna);

        return String.format("[%s][%s][%s] - %s - linha: %d | coluna: %d",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem(),linha, coluna);
    }

    public String CreateLogBaseValue() {
        System.out.printf("[%s][%s][%s] - %s - linha: %d | coluna: %d%n",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem(),linha + 1, coluna + 1);

        return String.format("[%s][%s][%s] - %s - linha: %d | coluna: %d",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem(),linha, coluna);
    }
}
