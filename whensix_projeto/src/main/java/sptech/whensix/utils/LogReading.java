package sptech.whensix.utils;

public class LogReading extends LogBaseAbstract {
    private int linha;
    private int coluna;

    public LogReading(int linha, int coluna) {
        super(NivelLog.INFO, TipoLog.READ_CELL_ERROR);
        this.linha = linha;
        this.coluna = coluna;
    }

    @Override
    public String CreateLog() {
        return String.format("[%s][%s][%s] - %s - linha: %d | erros: %d",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem(),linha, coluna);
    }
}
