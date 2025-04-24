package sptech.whensix.excel;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import sptech.whensix.utils.*;
import sptech.whensix.database.LoadLogs;

public class ExcelLeitor {
    private final LoadLogs loadLogs;

    public ExcelLeitor(LoadLogs loadLogs) {
        this.loadLogs = loadLogs;
    }

    public ResultadoLeitura processar(File arquivo) throws IOException {

        FileInputStream fis = new FileInputStream(arquivo);
        Workbook workbook = new XSSFWorkbook(fis);
        Sheet planilha = workbook.getSheetAt(0);

        int sucessos = 0;
        int erros = 0;

        for (Row linha : planilha) {
            for (Cell celula : linha) {
                try {
                    switch (celula.getCellType()) {
                        case STRING:
                            System.out.print(celula.getStringCellValue() + "\t");
                            sucessos++;
                            break;
                        case NUMERIC:
                            System.out.print(celula.getNumericCellValue() + "\t");
                            sucessos++;
                            break;
                        default:
                            System.out.print("?\t\t");
                            erros++;
                            CreateLog logCellError = CreateLog.logCellError(NivelLog.ERROR, TipoLog.READ_CELL_ERROR, celula.getRowIndex(), celula.getColumnIndex());
                            loadLogs.saveLog(logCellError);
                    }
                } catch (Exception e) {
                    erros++;
                    CreateLog logCustom = CreateLog.logCustom(NivelLog.ERROR, TipoLog.READ_ERROR, sucessos, erros);
                    loadLogs.saveLog(logCustom);
                }
            }
            System.out.println();
        }

        workbook.close();
        fis.close();

        return new ResultadoLeitura(sucessos, erros);
    }
}
