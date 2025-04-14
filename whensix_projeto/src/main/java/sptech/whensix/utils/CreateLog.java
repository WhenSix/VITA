package sptech.whensix.utils;

import java.time.format.DateTimeFormatter;

public class CreateLog {
    public static void log(NivelLog nivel, TipoLog tipo) {
        String formatDatetime =
                java.time.LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        System.out.printf("[%s] [%s] - %s%n", formatDatetime, nivel, tipo.getMensagem());
    }

    public static void logCustom(NivelLog nivel, TipoLog tipo, int sucesso, int erro) {
        String formatDatetime =
                java.time.LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        System.out.printf("[%s] [%s] - %s | Sucesso: %d | Erros: %d%n",
                formatDatetime, nivel, tipo.getMensagem(), sucesso, erro);
    }

    public static void logCellError(NivelLog nivel, TipoLog tipo, int linha, int coluna) {
        String formatDatetime =
                java.time.LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        System.out.printf("[%s] [%s] - %s: [linha %d, coluna %d]%n",
                formatDatetime, nivel, tipo.getMensagem(), linha, coluna);
    }
}
