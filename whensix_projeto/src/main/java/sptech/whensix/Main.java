package sptech.whensix;

import sptech.whensix.database.Banco;
import sptech.whensix.database.LoadLogs;
import sptech.whensix.excel.ExcelLeitor;
import sptech.whensix.s3.S3Downloader;
import java.io.File;
import sptech.whensix.utils.*;
import sptech.whensix.excel.ResultadoLeitura;

public class Main {
    public static void main(String[] args) {
        LoadLogs loadLogs = new LoadLogs(Banco.getDataSource());

        try {
            String nomeArquivoS3 = "Vigitel-2023-peso-rake.xlsx"; // nome no bucket
            String caminhoLocal = "Documentos/Vigitel-2023-peso-rake.xlsx"; // salvar localmente
            File arquivoTesteLocal = new File("C:/Users/caina/Documents/dados_pi/base_dados_pi.xlsx");
            //File arquivo = S3Downloader.baixarArquivo(nomeArquivoS3, caminhoLocal);
            //System.out.println("Arquivo baixado: " + arquivo.getAbsolutePath());

            ExcelLeitor.processar(arquivoTesteLocal, loadLogs);

        } catch (Exception e) {
            CreateLog logCustom = CreateLog.log(NivelLog.ERROR,TipoLog.READ_ERROR);

            e.printStackTrace();
        }
    }

}