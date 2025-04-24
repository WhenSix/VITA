package sptech.whensix.repository;

import sptech.whensix.database.Banco;
import sptech.whensix.model.Dado;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DadoRepository {
    public void salvar(Dado dado) throws SQLException {
        Connection conexao = Banco.conectar();

        String sql = """
            INSERT INTO tb_dado (
                cdg_cidade, sexo, peso, altura, frequencia_refri, qtd_refri, alcoolismo,
                freq_alcool, exercicio_fisico, tipo_exercicio_fisico, freq_exercicio_fisico,
                fumante, qtd_cigarros_dia, pesorake, imc, excpeso, obesidade, depressao
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """;

        PreparedStatement ps = conexao.prepareStatement(sql);
        ps.setInt(1, dado.getCdgCidade());
        ps.setInt(2, dado.getSexo());
        ps.setFloat(3, dado.getPeso());
        ps.setInt(4, dado.getAltura());
        ps.setInt(5, dado.getFrequenciaRefri());
        ps.setInt(6, dado.getQtdRefri());
        ps.setBoolean(7, dado.isAlcoolismo());
        ps.setInt(8, dado.getFreqAlcool());
        ps.setBoolean(9, dado.isExercicioFisico());
        ps.setInt(10, dado.getTipoExercicioFisico());
        ps.setInt(11, dado.getFreqExercicioFisico());
        ps.setBoolean(12, dado.isFumante());
        ps.setInt(13, dado.getQtdCigarrosDia());
        ps.setDouble(14, dado.getPesoRake());
        ps.setFloat(15, dado.getImc());
        ps.setBoolean(16, dado.isExcPeso());
        ps.setBoolean(17, dado.isObesidade());
        ps.setBoolean(18, dado.isDepressao());

        ps.executeUpdate();
        ps.close();
        conexao.close();
    }
}
