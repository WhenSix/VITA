package sptech.whensix.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import sptech.whensix.model.Dado;

import java.sql.SQLException;
import java.util.List;

public class DadoRepository {
    private final JdbcTemplate jdbcTemplate;

    public DadoRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void salvar(Dado dado) throws SQLException {
        String sql = """
    INSERT INTO tb_dado (
        cdg_cidade, idade, sexo, peso, altura, frequencia_refri, qtd_refri, tipo_refri, alcoolismo,
        freq_alcool, exercicio_fisico, tipo_exercicio_fisico, freq_exercicio_fisico,
        fumante, pesorake, imc, excpeso, obesidade, depressao
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
""";


        jdbcTemplate.update(sql,
                dado.getCdgCidade(),
                dado.getIdade(),
                dado.getSexo(),
                dado.getPeso(),
                dado.getAltura(),
                dado.getFrequenciaRefri(),
                dado.getQtdRefri(),
                dado.getTipoRefri(),
                dado.isAlcoolismo(),
                dado.getFreqAlcool(),
                dado.isExercicioFisico(),
                dado.getTipoExercicioFisico(),
                dado.getFreqExercicioFisico(),
                dado.isFumante(),
                dado.getPesoRake(),
                dado.getImc(),
                dado.isExcPeso(),
                dado.isObesidade(),
                dado.isDepressao()
        );
    }


    public void salvarComBatch(List<Dado> dados) {
        String sql = """
        INSERT INTO tb_dado (
            cdg_cidade, idade, sexo, peso, altura, frequencia_refri, qtd_refri, tipo_refri, alcoolismo,
            freq_alcool, exercicio_fisico, tipo_exercicio_fisico, freq_exercicio_fisico,
            fumante, pesorake, imc, excpeso, obesidade, depressao
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """;

        jdbcTemplate.batchUpdate(sql, dados, 5000, (ps, dado) -> {
            ps.setInt(1, dado.getCdgCidade());
            ps.setInt(2, dado.getIdade());
            ps.setInt(3, dado.getSexo());
            ps.setFloat(4, dado.getPeso());
            ps.setInt(5, dado.getAltura());
            ps.setInt(6, dado.getFrequenciaRefri());
            ps.setInt(7, dado.getQtdRefri());
            ps.setInt(8, dado.getTipoRefri());
            ps.setBoolean(9, dado.isAlcoolismo());
            ps.setInt(10, dado.getFreqAlcool());
            ps.setBoolean(11, dado.isExercicioFisico());
            ps.setInt(12, dado.getTipoExercicioFisico());
            ps.setInt(13, dado.getFreqExercicioFisico());
            ps.setBoolean(14, dado.isFumante());
            ps.setDouble(15, dado.getPesoRake());
            ps.setFloat(16, dado.getImc());
            ps.setBoolean(17, dado.isExcPeso());
            ps.setBoolean(18, dado.isObesidade());
            ps.setBoolean(19, dado.isDepressao());
        });
    }

    public void salvarPorLote(List<Dado> dados, int tamanhoLote) {
        int total = dados.size();
        for (int i = 0; i < total; i += tamanhoLote) {
            int fim = Math.min(i + tamanhoLote, total);
            List<Dado> subLista = dados.subList(i, fim);
            for (Dado dado : subLista) {
                try {
                    salvar(dado);
                } catch (Exception e) {
                    System.err.println("Erro ao salvar dado individual: " + e.getMessage());
                }
            }
            System.out.println("Lote de " + subLista.size() + " inserido.");
        }
    }

}
