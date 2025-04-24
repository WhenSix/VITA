package sptech.whensix.excel;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import sptech.whensix.model.Dado;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import sptech.whensix.utils.*;

public class ExcelLeitor {

    public static List<Dado> processar(File arquivo) throws IOException {
        List<Dado> dados = new ArrayList<>();
        FileInputStream fis = new FileInputStream(arquivo);
        Workbook workbook = new XSSFWorkbook(fis);
        Sheet planilha = workbook.getSheetAt(0);

        boolean primeiraLinha = true;

        for (Row linha : planilha) {
            if (primeiraLinha) {
                primeiraLinha = false;
                continue;
            }

            Dado dado = new Dado();

            dado.setCdgCidade(getInt(linha, 0));
            dado.setSexo(getInt(linha, 2));
            dado.setPeso(getFloat(linha, 3));
            dado.setAltura(getInt(linha, 4));
            dado.setFrequenciaRefri(getInt(linha, 5));
            dado.setQtdRefri(getInt(linha, 6));
            dado.setAlcoolismo(getBooleanFromValue(linha, 7, 1));
            dado.setFreqAlcool(getInt(linha, 8));
            dado.setExercicioFisico(getBooleanFromValue(linha, 9, 1));
            dado.setTipoExercicioFisico(getInt(linha, 10));
            dado.setFreqExercicioFisico(getInt(linha, 11));
            dado.setFumante(getBooleanFromValues(linha, 12, new int[]{1, 2}));
            dado.setQtdCigarrosDia(getInt(linha, 13));
            dado.setPesoRake(getDouble(linha, 14));
            dado.setImc(getFloat(linha, 15));
            dado.setExcPeso(getBooleanFromValue(linha, 16, 1));
            dado.setObesidade(getBooleanFromValue(linha, 17, 1));
            dado.setDepressao(getBooleanFromValue(linha, 18, 1));

            dados.add(dado);
        }

        workbook.close();
        fis.close();
        return dados;
    }

    private static int getInt(Row row, int index) {
        Cell cell = row.getCell(index);
        return cell != null && cell.getCellType() == CellType.NUMERIC ? (int) cell.getNumericCellValue() : 0;
    }

    private static float getFloat(Row row, int index) {
        Cell cell = row.getCell(index);
        return cell != null && cell.getCellType() == CellType.NUMERIC ? (float) cell.getNumericCellValue() : 0f;
    }

    private static double getDouble(Row row, int index) {
        Cell cell = row.getCell(index);
        return cell != null && cell.getCellType() == CellType.NUMERIC ? cell.getNumericCellValue() : 0d;
    }

    private static boolean getBooleanFromValue(Row row, int index, int expected) {
        Cell cell = row.getCell(index);
        return cell != null && cell.getCellType() == CellType.NUMERIC && ((int) cell.getNumericCellValue()) == expected;
    }

    private static boolean getBooleanFromValues(Row row, int index, int[] expectedValues) {
        Cell cell = row.getCell(index);
        if (cell != null && cell.getCellType() == CellType.NUMERIC) {
            int value = (int) cell.getNumericCellValue();
            for (int expected : expectedValues) {
                if (value == expected) {
                    return true;
                }
            }
        }
        return false;
    }
}
