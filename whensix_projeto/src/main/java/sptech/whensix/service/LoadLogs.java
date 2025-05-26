package sptech.whensix.service;

import org.springframework.jdbc.core.JdbcTemplate;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

public class LoadLogs {
    private final JdbcTemplate jdbcTemplate;
    private static final int TAMANHO_SUB_LOTE = 1000;

    public LoadLogs(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void saveLogsUltraFast(List<String> logs) {
        if (logs == null || logs.isEmpty()) return;

        for (int i = 0; i < logs.size(); i += TAMANHO_SUB_LOTE) {
            int fim = Math.min(i + TAMANHO_SUB_LOTE, logs.size());
            List<String> subLista = logs.subList(i, fim);
            insertRaw(subLista);
        }
    }

    private void insertRaw(List<String> logs) {
        if (logs.isEmpty()) return;

        Timestamp timestamp = Timestamp.valueOf(LocalDateTime.now());
        StringBuilder sql = new StringBuilder("INSERT INTO logs (msg_log, dt_log) VALUES ");

        for (int i = 0; i < logs.size(); i++) {
            String log = logs.get(i).replace("'", "''");
            sql.append("('")
                    .append(log)
                    .append("', '")
                    .append(timestamp)
                    .append("')");
            if (i < logs.size() - 1) {
                sql.append(", ");
            }
        }

        jdbcTemplate.update(sql.toString());
    }
}
