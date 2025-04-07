package sptech.whensix;

import sptech.whensix.logs.Log;
import sptech.whensix.s3.S3Downloader;
import sptech.whensix.excel.ExcelLeitor;

import java.io.File;

public class Main {
//    public static void main(String[] args) {
//        Log log = new Log();
//        String[] proccessList = {"processo1", "processo2", "processo3"};
//        log.getLog(proccessList);
//    }
//
public static void main(String[] args) {
    try {
        String nomeArquivoS3 = "exemplo.xlsx"; // nome no bucket
        String caminhoLocal = "arquivo-baixado.xlsx"; // salvar localmente

        File arquivo = S3Downloader.baixarArquivo(nomeArquivoS3, caminhoLocal);
        System.out.println("Arquivo baixado: " + arquivo.getAbsolutePath());

        ExcelLeitor.processar(arquivo);

    } catch (Exception e) {
        e.printStackTrace();
    }
}

}