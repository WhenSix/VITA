package sptech.whensix.excel;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import sptech.whensix.model.Dado;
import sptech.whensix.utils.*;
import sptech.whensix.utils.LogFunctional;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class ExcelLeitor {

    public static List<Dado> processar(InputStream inputStream, List<String> logs) throws Exception {
        List<Dado> dados = new ArrayList<>();
        LogProcess logStart = new LogProcess(TipoLog.READ_START);

        int sucessos = 0;
        int erros = 0;

        logs.add(logStart.CreateLog());

        try (Workbook workbook = new XSSFWorkbook(inputStream)) {
            Sheet planilha = workbook.getSheetAt(0);
            boolean primeiraLinha = true;
            int numColunas = 18;

            for (Row linha : planilha) {

                if (primeiraLinha) {
                    primeiraLinha = false;
                    continue;
                }

                Dado dado = new Dado();
                int linhaNum = linha.getRowNum();

                try {
                    dado.setCdgCidade(tryGet(linha, 0, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setIdade(tryGet(linha, 1, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setSexo(tryGet(linha, 2, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setPeso(tryGet(linha, 3, ExcelLeitor::getFloat, logs, linhaNum, 888f));
                    dado.setAltura(tryGet(linha, 4, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setFrequenciaRefri(tryGet(linha, 5, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setTipoRefri(tryGet(linha, 6, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setQtdRefri(tryGet(linha, 7, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setAlcoolismo(getBooleanFromValue(linha, 8, 1));
                    dado.setFreqAlcool(tryGet(linha, 9, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setExercicioFisico(getBooleanFromValue(linha, 10, 1));
                    dado.setTipoExercicioFisico(tryGet(linha, 11, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setFreqExercicioFisico(tryGet(linha, 12, ExcelLeitor::getInt, logs, linhaNum, 888));
                    dado.setFumante(getBooleanFromValues(linha, 13, new int[]{1, 2}));
                    dado.setPesoRake(tryGet(linha, 14, ExcelLeitor::getDouble, logs, linhaNum, 888d));
                    dado.setImc(tryGet(linha, 15, ExcelLeitor::getFloat, logs, linhaNum, 888f));
                    dado.setExcPeso(getBooleanFromValue(linha, 16, 1));
                    dado.setObesidade(getBooleanFromValue(linha, 17, 1));
                    dado.setDepressao(getBooleanFromValue(linha, 18, 1));
                    sucessos++;
                } catch (Exception e) {
                    erros++;
                }
            }
                logs.add(new LogResult(sucessos, erros).CreateLog());
        }

        logs.add(new LogProcess(TipoLog.READ_FINISH).CreateLog());

        logs.add(new LogLoad(TipoLog.LOAD_START).CreateLog());

        return dados;
    }

    private static <T> T tryGet(Row row, int index, LogFunctional.LogFunction<T> function, List<String> logs, int linhaNum, T baseValue) {
        try {
            return function.apply(row, index);

        } catch (Exception e) {
            logs.add(new LogReading(TipoLog.CHANGE_VALUE, linhaNum, index).CreateLogBaseValue());
            return baseValue;
        }
    }

    private static Integer getInt(Row row, int index) {
        Cell cell = row.getCell(index);
        if (cell == null || cell.getCellType() != CellType.NUMERIC) {
            throw new RuntimeException();
        } else {
            return (int) cell.getNumericCellValue();
        }
    }

    private static Float getFloat(Row row, int index) {
        Cell cell = row.getCell(index);
        if (cell == null || cell.getCellType() != CellType.NUMERIC) {
            throw new RuntimeException();
        } else {
            return (float) cell.getNumericCellValue();
        }
    }

    private static Double getDouble(Row row, int index) {
        Cell cell = row.getCell(index);
        if (cell == null || cell.getCellType() != CellType.NUMERIC) {
            throw new RuntimeException();
        } else {
            return cell.getNumericCellValue();
        }
    }

    private static Boolean getBooleanFromValue(Row row, int index, int expectedValue) {
        Cell cell = row.getCell(index);
        if (cell == null || cell.getCellType() != CellType.NUMERIC) {
            throw new RuntimeException("Célula inválida ou tipo incorreto para índice " + index);
        }
        return (int) cell.getNumericCellValue() == expectedValue;
    }

    private static Boolean getBooleanFromValues(Row row, int index, int[] expectedValues) {
        Cell cell = row.getCell(index);
        if (cell == null || cell.getCellType() != CellType.NUMERIC) {
            throw new RuntimeException("Célula inválida ou tipo incorreto para índice " + index);
        }

        int value = (int) cell.getNumericCellValue();
        for (int expected : expectedValues) {
            if (value == expected) {
                return true;
            }
        }
        return false;
    }
}
