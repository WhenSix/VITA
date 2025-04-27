package sptech.whensix.database;

import org.springframework.jdbc.core.JdbcTemplate;
import sptech.whensix.utils.CreateLog;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import sptech.whensix.utils.*;

import java.sql.PreparedStatement;
import java.sql.Timestamp;
import java.sql.Types;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.List;

public class LoadLogs {
    private final JdbcTemplate jdbcTemplate;

    public LoadLogs(DataSource conexao) {
        this.jdbcTemplate = new JdbcTemplate(conexao);
    }

    public void saveLogsBatch(List<CreateLog> logs) {
        int batchSize = 5000;
        for (int i = 0; i < logs.size(); i += batchSize) {
            int end = Math.min(i + batchSize, logs.size());
            List<CreateLog> subList = logs.subList(i, end);

            saveSubBatch(subList);
        }
    }

    private void saveSubBatch(List<CreateLog> logs) {
        String sql = "INSERT INTO tb_log(msg_log, dt_log, nivel_log, categoria_log, linha_log, erros_na_linha) " +
                "VALUES (?, ?, ?, ?, ?, ?)";

        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps, int i) throws SQLException {
                CreateLog log = logs.get(i);
                ps.setString(1, log.getMensagem());
                ps.setTimestamp(2, Timestamp.valueOf(log.getDtHora()));
                ps.setString(3, log.getNivel().toString());
                ps.setString(4, log.getTipo().toString());

                // Para logs de inicialização e término (sem erro por linha)
                if (log.getTipo() == TipoLog.READ_START || log.getTipo() == TipoLog.READ_SUCESS) {
                    // Definindo valores padrão para linha e erros na linha (null ou 0)
                    ps.setNull(5, Types.INTEGER);  // linha_log como null
                    ps.setNull(6, Types.INTEGER);  // erros_na_linha como null
                } else {
                    // Para logs de erro por linha, usamos os valores reais
                    ps.setInt(5, log.getLinha() != null ? log.getLinha() : 0); // Se não houver linha, define como 0
                    ps.setInt(6, log.getErrosNaLinha() != null ? log.getErrosNaLinha() : 0); // Se não houver erros, define como 0
                }
            }

            @Override
            public int getBatchSize() {
                return logs.size();
            }
        });
    }

}

