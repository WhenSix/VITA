package sptech.whensix.repository;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import sptech.whensix.model.Dado;
import java.util.List;

public class Selects {
    private final JdbcTemplate jdbcTemplate;

    public Selects(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Double findMediaIMCGeral() {
        String sql = "SELECT AVG(peso / (altura * altura)) AS media_imc FROM tb_dado";
        return jdbcTemplate.queryForObject(sql, Double.class);
    }

    public List<Dado> findMediaIMCPorCidade() {
        String sql = "SELECT cdg_cidade, AVG(peso / (altura * altura)) AS imcCalculado " +
                "FROM tb_dado GROUP BY cdg_cidade";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Dado.class));
    }
}
