package sptech.whensix.utils;

public class LogLoad extends LogBaseAbstract {
    public LogLoad(TipoLog tipo) {
        super(NivelLog.LOAD, tipo);
    }

    @Override
    public String CreateLog() {
        System.out.printf("[%s][%s][%s] - %s%n",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem());

        return String.format("[%s][%s][%s] - %s",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem());
    }
}
