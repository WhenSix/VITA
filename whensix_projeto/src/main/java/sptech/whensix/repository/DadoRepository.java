package sptech.whensix.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import sptech.whensix.config.Banco;
import sptech.whensix.model.Dado;
import java.sql.SQLException;

public class DadoRepository {
    private final JdbcTemplate jdbcTemplate;

    public DadoRepository() {
        this.jdbcTemplate = new JdbcTemplate(Banco.getDataSource());
    }

    public void salvar(Dado dado) throws SQLException {
        String sql = """
            INSERT INTO tb_dado (
                cdg_cidade, sexo, peso, altura, frequencia_refri, qtd_refri, alcoolismo,
                freq_alcool, exercicio_fisico, tipo_exercicio_fisico, freq_exercicio_fisico,
                fumante, qtd_cigarros_dia, pesorake, imc, excpeso, obesidade, depressao
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """;

        jdbcTemplate.update(sql,
                dado.getCdgCidade(),
                dado.getSexo(),
                dado.getPeso(),
                dado.getAltura(),
                dado.getFrequenciaRefri(),
                dado.getQtdRefri(),
                dado.isAlcoolismo(),
                dado.getFreqAlcool(),
                dado.isExercicioFisico(),
                dado.getTipoExercicioFisico(),
                dado.getFreqExercicioFisico(),
                dado.isFumante(),
                dado.getQtdCigarrosDia(),
                dado.getPesoRake(),
                dado.getImc(),
                dado.isExcPeso(),
                dado.isObesidade(),
                dado.isDepressao()
        );
    }
}