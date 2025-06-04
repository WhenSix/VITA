package sptech.whensix;

import org.json.JSONObject;
import org.springframework.jdbc.core.JdbcTemplate;
import sptech.whensix.config.Banco;
import sptech.whensix.config.Config;
import sptech.whensix.excel.ExcelLeitor;
import sptech.whensix.model.Dado;
import sptech.whensix.repository.DadoRepository;
import sptech.whensix.s3.S3Downloader;
import sptech.whensix.service.LoadLogs;
import sptech.whensix.utils.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException{
        JdbcTemplate jdbcTemplate = new JdbcTemplate(Banco.getDataSource());
        LogProcess logProcessError = new LogProcess(TipoLog.READ_ERROR);
        LogLoad logLoad = new LogLoad(TipoLog.LOAD_START);
        LogLoad logLoadSucess = new LogLoad(TipoLog.LOAD_SUCESS);
        LogLoad logLoadError = new LogLoad(TipoLog.LOAD_ERROR);

        LoadLogs loadLogs = new LoadLogs(jdbcTemplate);

        DadoRepository dadoRepository = new DadoRepository(jdbcTemplate);

        try {
            JSONObject json = new JSONObject();

            json.put("text", "Importação de dados inicada!");
            Slack.sendMessage(json);

            String s3FilePath = Config.get("S3_FILE_PATH");

            InputStream arquivoStream = S3Downloader.baixarArquivo(s3FilePath);

            if (arquivoStream == null) {
                logProcessError.CreateLog();
                System.err.println("Falha ao obter o arquivo do S3.");
                return;
            }

            List<String> logs = new ArrayList<>();
            List<Dado> dados = ExcelLeitor.processar(arquivoStream, logs);

            int tamanhoLote = 5000; // ajuste conforme desejado
            dadoRepository.salvarPorLote(dados, tamanhoLote);
            loadLogs.saveLogsUltraFast(logs);
            logLoadSucess.CreateLog();

            JSONObject json2 = new JSONObject();

            json2.put("text", "Importação finalizada :rindo:!!");
            Slack.sendMessage(json2);

        } catch (Exception e) {
            logLoadError.CreateLog();
            e.printStackTrace();
        }
    }
}
