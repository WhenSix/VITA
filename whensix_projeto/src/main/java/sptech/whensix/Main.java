package sptech.whensix;

import sptech.whensix.config.Banco;
import sptech.whensix.config.Config;
import sptech.whensix.excel.ExcelLeitor;
import sptech.whensix.model.Dado;
import sptech.whensix.repository.DadoRepository;
import sptech.whensix.s3.S3Downloader;
import sptech.whensix.service.LoadLogs;
import sptech.whensix.utils.CreateLog;
import sptech.whensix.utils.NivelLog;
import sptech.whensix.utils.TipoLog;

import java.io.File;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        LoadLogs loadLogs = new LoadLogs(Banco.getDataSource());
        DadoRepository dadoRepository = new DadoRepository();

        try {
            // 1. Configurações do S3
            String s3FilePath = Config.get("S3_FILE_PATH");
            String caminhoLocal = "C://Users/silve/Documents/basedados/base_dados_pi.xlsx";

            // 2. Baixar arquivo do S3
            File arquivo = S3Downloader.baixarArquivo(s3FilePath, caminhoLocal);

            if (arquivo == null) {
                CreateLog.log(NivelLog.ERROR, TipoLog.READ_ERROR);
                System.err.println("Falha ao baixar o arquivo do S3.");
                return;
            }

            // 3. Processar e salvar no banco
            CreateLog.log(NivelLog.INFO, TipoLog.READ_START);
            List<Dado> dados = ExcelLeitor.processar(arquivo, loadLogs);

            CreateLog.log(NivelLog.INFO, TipoLog.LOAD_START);
            for (Dado dado : dados) {
                try {
                    dadoRepository.salvar(dado);
                } catch (Exception e) {
                    System.err.println("Erro ao salvar dado: " + e.getMessage());
                }
            }

            CreateLog.log(NivelLog.INFO, TipoLog.LOAD_SUCESS);
            System.out.println("Dados importados com sucesso! Total: " + dados.size());

        } catch (Exception e) {
            CreateLog.log(NivelLog.ERROR, TipoLog.LOAD_ERROR);
            System.err.println("Erro fatal: " + e.getMessage());
            e.printStackTrace();
        }
    }
}