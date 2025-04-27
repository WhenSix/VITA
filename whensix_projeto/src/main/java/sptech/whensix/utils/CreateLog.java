package sptech.whensix.utils;

import java.time.format.DateTimeFormatter;

public class CreateLog {
    private NivelLog nivel;
    private TipoLog tipo;
    private String mensagem;
    private String dtHora;
    private Integer linha;
    private Integer errosNaLinha;

    public CreateLog(NivelLog nivel, TipoLog tipo) {
        this.nivel = nivel;
        this.tipo = tipo;
        this.mensagem = tipo.getMensagem();
        this.dtHora = getDateTime();
    }

    public CreateLog(NivelLog nivel, TipoLog tipo, int linha, int errosNaLinha) {
        this.nivel = nivel;
        this.tipo = tipo;
        this.mensagem = tipo.getMensagem();
        this.linha = linha;
        this.errosNaLinha = errosNaLinha;
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

    public static CreateLog log(NivelLog nivel, TipoLog tipo) {
        CreateLog log = new CreateLog(nivel, tipo);

        System.out.printf("[%s] [%s] - %s%n", log.dtHora, nivel, tipo.getMensagem());

        return log;
    }

    public static CreateLog logCustom(NivelLog nivel, TipoLog tipo, int sucesso, int erro) {
        CreateLog logCustom = new CreateLog(nivel, tipo);

        System.out.printf("[%s] [%s] - %s | Sucesso: %d | Erros: %d%n",
                logCustom.dtHora, nivel, tipo.getMensagem(), sucesso, erro);

        return logCustom;
    }

    public static CreateLog logLineError(NivelLog nivel, TipoLog tipo, int linha, int errosNaLinha) {
        CreateLog logLineError = new CreateLog(nivel, tipo, linha, errosNaLinha);

        System.out.printf("[%s] [%s] - %s: [linha %d, Erros: %d]%n",
                logLineError.dtHora, nivel, tipo.getMensagem(), linha, errosNaLinha);

        return logLineError;
    }
}
