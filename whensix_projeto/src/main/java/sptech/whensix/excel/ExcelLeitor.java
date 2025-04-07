package sptech.whensix.excel;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ExcelLeitor {
    public static void processar(File arquivo) throws IOException {
        FileInputStream fis = new FileInputStream(arquivo);
        Workbook workbook = new XSSFWorkbook(fis);
        Sheet planilha = workbook.getSheetAt(0);

        for (Row linha : planilha) {
            for (Cell celula : linha) {
                switch (celula.getCellType()) {
                    case STRING:
                        System.out.print(celula.getStringCellValue() + "\t");
                        break;
                    case NUMERIC:
                        System.out.print(celula.getNumericCellValue() + "\t");
                        break;
                    default:
                        System.out.print("?\t");
                }
            }
            System.out.println();
        }

        workbook.close();
        fis.close();
    }
}
