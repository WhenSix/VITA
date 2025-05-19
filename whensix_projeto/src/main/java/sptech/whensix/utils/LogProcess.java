package sptech.whensix.utils;

public class LogProcess extends LogBaseAbstract {
    public LogProcess(TipoLog tipo) {
        super(NivelLog.INFO, tipo);
    }

    @Override
    public String CreateLog() {
        return String.format("[%s][%s][%s] - %s",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem());
    }
}
