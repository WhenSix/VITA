package sptech.whensix;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import sptech.whensix.config.Config;
import sptech.whensix.logs.Log;
import sptech.whensix.model.Dado;
import sptech.whensix.repository.DadoRepository;
import sptech.whensix.s3.S3Downloader;
import sptech.whensix.excel.ExcelLeitor;

import java.io.File;
import java.util.List;
import java.io.IOException;


public class Main {
    public static void main(String[] args) throws IOException {
        File arquivo = new File("/home/fly/test/base_dados_pi.xlsx");
        List<Dado> dados = ExcelLeitor.processar(arquivo);
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
    }







}