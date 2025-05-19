package sptech.whensix.utils;

import java.time.format.DateTimeFormatter;

public class CreateLog {
    private final NivelLog nivel;
    private final TipoLog tipo;
    private final String mensagem;
    private final String dtHora;

    public CreateLog(NivelLog nivel, TipoLog tipo) {
        this.nivel = nivel;
        this.tipo = tipo;
        this.mensagem = tipo.getMensagem();
        this.dtHora = getDateTime();
    }

    private String getDateTime() {
        return java.time.LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
    }

    public NivelLog getNivel() {
        return nivel;
    }

    public TipoLog getTipo() {
        return tipo;
    }

    public String getMensagem() {
        return mensagem;
    }

    public String getDtHora() {
        return dtHora;
    }

    public Integer getLinha() {
        return linha;
    }

    public Integer getErrosNaLinha() {
        return errosNaLinha;
    }

    public CreateLog log(NivelLog nivel, TipoLog tipo) {
        CreateLog log = new CreateLog(nivel, tipo);
        System.out.printf("[%s] [%s] - %s%n", log.dtHora, nivel, tipo.getMensagem());
        return log;
    }
}