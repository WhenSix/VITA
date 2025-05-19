package sptech.whensix.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public abstract class LogBaseAbstract {
    protected NivelLog nivel;
    protected TipoLog tipo;
    protected String dtHora;

    public LogBaseAbstract(NivelLog nivel, TipoLog tipo) {
        this.nivel = nivel;
        this.tipo = tipo;
        this.dtHora = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }

    public abstract String CreateLog();

    public NivelLog getNivel() {
        return nivel;
    }

    public TipoLog getTipo() {
        return tipo;
    }

    public String getDtHora() {
        return dtHora;
    }
}
