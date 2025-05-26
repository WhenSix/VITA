package sptech.whensix.utils;

public class LogProcess extends LogBaseAbstract {
    public LogProcess(TipoLog tipo) {
        super(NivelLog.INFO, tipo);
    }

    @Override
    public String CreateLog() {
        System.out.printf("[%s][%s][%s] - %s%n",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem());

        return String.format("[%s][%s][%s] - %s",
                getDtHora(), getNivel(), getTipo(), tipo.getMensagem());
    }
}
