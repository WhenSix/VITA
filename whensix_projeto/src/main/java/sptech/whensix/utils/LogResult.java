package sptech.whensix.utils;

public class LogResult extends LogBaseAbstract {
    private int sucessos;
    private int erros;

    public LogResult(int sucessos, int erros) {
        super(NivelLog.INFO, TipoLog.RESULT);
        this.sucessos = sucessos;
        this.erros = erros;
    }

    @Override
    public String CreateLog() {
        return String.format("[%s][%s][%s] - %s - %d sucessos | %d erros",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem(),sucessos, erros);
    }
}
