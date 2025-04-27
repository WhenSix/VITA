package sptech.whensix.importacao;

import sptech.whensix.database.LoadLogs;
import sptech.whensix.excel.ExcelLeitor;
import sptech.whensix.model.Dado;
import sptech.whensix.repository.DadoRepository;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class Importador {
    public static void main(String[] args)  throws IOException  {
        try {
            File arquivo = new File("/home/fly/test/base_dados_pi.xlsx");
            List<Dado> dados = ExcelLeitor.processar(arquivo, null);
            DadoRepository repo = new DadoRepository();

            for (Dado dado : dados) {
                try {
                    repo.salvar(dado);
                    System.out.println("Salvo com sucesso: " + dado);
                } catch (Exception e) {
                    System.out.println("Erro ao salvar: " + e.getMessage());
                }
            }

            System.out.println("Importação concluída!");
        } catch (IOException e) {
            System.out.println("Erro ao processar o Excel: " + e.getMessage());
        }
    }
}
