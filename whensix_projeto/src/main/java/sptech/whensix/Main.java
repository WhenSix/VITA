package sptech.whensix;

import sptech.whensix.s3.S3Downloader;
import sptech.whensix.excel.ExcelLeitor;
import java.io.File;
import sptech.whensix.utils.*;
import sptech.whensix.excel.ResultadoLeitura;

public class Main {
    //    public static void main(String[] args) {
//        Log log = new Log();
//        String[] proccessList = {"processo1", "processo2", "processo3"};
//        log.getLog(proccessList);
//    }
//
    public static void main(String[] args) {
        ResultadoLeitura resultado = new ResultadoLeitura(0,0);

        try {
            CreateLog.log(NivelLog.INFO, TipoLog.READ_START);

            String nomeArquivoS3 = "Vigitel-2023-peso-rake.xlsx"; // nome no bucket
            String caminhoLocal = "Documentos/Vigitel-2023-peso-rake.xlsx"; // salvar localmente
            File arquivo = S3Downloader.baixarArquivo(nomeArquivoS3, caminhoLocal);
            System.out.println("Arquivo baixado: " + arquivo.getAbsolutePath());

            resultado = ExcelLeitor.processar(arquivo);
        } catch (Exception e) {
            CreateLog.logCustom(NivelLog.ERROR,TipoLog.READ_ERROR, resultado.getSucessos(), resultado.getErros());

            e.printStackTrace();
        }
        CreateLog.logCustom(NivelLog.INFO, TipoLog.READ_SUCESS, resultado.getSucessos(), resultado.getErros());
    }

}