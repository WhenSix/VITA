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

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        LoadLogs loadLogs = new LoadLogs(Banco.getDataSource());
        DadoRepository dadoRepository = new DadoRepository();

        try {
            String s3FilePath = Config.get("S3_FILE_PATH");

            InputStream arquivoStream = S3Downloader.baixarArquivo(s3FilePath);

            if (arquivoStream == null) {
                CreateLog.log(NivelLog.ERROR, TipoLog.READ_ERROR);
                System.err.println("Falha ao obter o arquivo do S3.");
                return;
            }

            CreateLog.log(NivelLog.INFO, TipoLog.READ_START);
            List<Dado> dados = ExcelLeitor.processar(arquivoStream, loadLogs);

            CreateLog.log(NivelLog.INFO, TipoLog.LOAD_START);

            // --- 1) SALVAR INDIVIDUALMENTE (um por um) ---

            int sucesso = 0, erro = 0;
            for (Dado dado : dados) {
                try {
                    dadoRepository.salvar(dado);
                    sucesso++;
                } catch (Exception e) {
                    erro++;
                    System.err.println("Erro ao salvar dado: " + e.getMessage());
                }
            }
            CreateLog.logCustom(NivelLog.INFO, TipoLog.LOAD_SUCESS, sucesso, erro);


            // --- 2) SALVAR POR LOTE (tamanho lote definido, chama salvar individualmente dentro do lote) ---

//            int tamanhoLote = 5000; // ajuste conforme desejado
//            dadoRepository.salvarPorLote(dados, tamanhoLote);
//            CreateLog.log(NivelLog.INFO, TipoLog.LOAD_SUCESS);


            // --- 3) SALVAR COM BATCH UPDATE (todos juntos em batch) ---
//            dadoRepository.salvarComBatch(dados);
//            CreateLog.log(NivelLog.INFO, TipoLog.LOAD_SUCESS);

            System.out.println("Dados importados com sucesso! Total: " + dados.size());

        } catch (Exception e) {
            CreateLog.log(NivelLog.ERROR, TipoLog.LOAD_ERROR);
            System.err.println("Erro fatal: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
