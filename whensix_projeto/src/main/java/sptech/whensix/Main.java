package sptech.whensix;

import sptech.whensix.database.Banco;
import sptech.whensix.database.LoadLogs;
import sptech.whensix.s3.S3Downloader;
import sptech.whensix.excel.ExcelLeitor;
import java.io.File;
import sptech.whensix.utils.*;
import sptech.whensix.excel.ResultadoLeitura;

public class Main {
    public static void main(String[] args) {
        ResultadoLeitura resultado = new ResultadoLeitura(0,0);
        Banco conexaoBanco = new Banco();

        LoadLogs loadLogs = new LoadLogs(conexaoBanco.getJdbcTemplate());
        ExcelLeitor leitor = new ExcelLeitor(loadLogs);

        try {
            CreateLog log = CreateLog.log(NivelLog.INFO, TipoLog.READ_START);
            loadLogs.saveLog(log);
            String nomeArquivoS3 = "Vigitel-2023-peso-rake.xlsx"; // nome no bucket
            String caminhoLocal = "Documentos/Vigitel-2023-peso-rake.xlsx"; // salvar localmente
            File arquivoTesteLocal = new File("C:/Users/caina/Documents/dados_pi/Vigitel-2023-peso-rake-Copia.xlsx");
            //File arquivo = S3Downloader.baixarArquivo(nomeArquivoS3, caminhoLocal);
            //System.out.println("Arquivo baixado: " + arquivo.getAbsolutePath());

            resultado = leitor.processar(arquivoTesteLocal);
        } catch (Exception e) {
            CreateLog logCustom = CreateLog.logCustom(NivelLog.ERROR,TipoLog.READ_ERROR, resultado.getSucessos(), resultado.getErros());
            loadLogs.saveLog(logCustom);

            e.printStackTrace();
        }

        CreateLog logCustom = CreateLog.logCustom(NivelLog.INFO, TipoLog.READ_SUCESS, resultado.getSucessos(), resultado.getErros());
        loadLogs.saveLog(logCustom);
    }

}