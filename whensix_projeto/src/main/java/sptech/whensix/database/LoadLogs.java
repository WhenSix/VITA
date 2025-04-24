    package sptech.whensix.database;

    import org.springframework.jdbc.core.JdbcTemplate;
    import sptech.whensix.utils.CreateLog;

    public class LoadLogs {
        private final JdbcTemplate jdbcTemplate;

        public LoadLogs(JdbcTemplate jdbcTemplate) {
            this.jdbcTemplate = jdbcTemplate;
        }

        public void saveLog(CreateLog log) {

            if (log.confirmCellLog()) {
                jdbcTemplate.update("INSERT INTO tb_log(msg_log, dt_log, nivel_log, categoria_log, linha_log, coluna_log) VALUES (?, ?, ?, ?, ?, ?)",
                        log.getMensagem(), log.getDtHora(), log.getNivel().toString(), log.getTipo().toString(), log.getLinha(), log.getColuna());
            }else {
                jdbcTemplate.update("INSERT INTO tb_log(msg_log, dt_log, nivel_log, categoria_log, linha_log, coluna_log) VALUES (?, ?, ?, ?, ?, ?)",
                        log.getMensagem(), log.getDtHora(), log.getNivel().toString(), log.getTipo().toString(), null, null);
            }
        }
    }
