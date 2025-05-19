package sptech.whensix.utils;

public class LogLoad extends LogBaseAbstract {
    public LogLoad(NivelLog nivel, TipoLog tipo) {
        super(NivelLog.LOAD, tipo);
    }

    @Override
    public String CreateLog() {
        return String.format("[%s][%s][%s] - %s",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem());
    }
}
