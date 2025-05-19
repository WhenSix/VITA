package sptech.whensix.service;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import sptech.whensix.utils.CreateLog;
import sptech.whensix.utils.NivelLog;
import sptech.whensix.utils.TipoLog;
import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.List;

public class LoadLogs {
    private final JdbcTemplate jdbcTemplate;

    public LoadLogs(DataSource conexao) {
        this.jdbcTemplate = new JdbcTemplate(conexao);
    }

    public void saveLogsBatch(List<String> logs) {
        String sql = """
            INSERT INTO tb_log(msg_log, dt_log, nivel_log, categoria_log, linha_log, erros_na_linha)
            VALUES (?, ?, ?, ?, ?, ?)
        """;

        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                String log = logs.get(i);
                ps.setString(1, log.getMensagem());
                ps.setTimestamp(2, Timestamp.valueOf(log.getDtHora()));
                ps.setString(3, log.getNivel().toString());
                ps.setString(4, log.getTipo().toString());
                ps.setInt(5, log.getLinha() != null ? log.getLinha() : 0);
                ps.setInt(6, log.getErrosNaLinha() != null ? log.getErrosNaLinha() : 0);
            }

            @Override
            public int getBatchSize() {
                return logs.size();
            }
        });
    }
}