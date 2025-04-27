package sptech.whensix.excel;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import sptech.whensix.model.Dado;
import sptech.whensix.utils.*;
import sptech.whensix.database.LoadLogs;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ExcelLeitor {

    public static List<Dado> processar(File arquivo, LoadLogs loadLog) throws IOException {
        List<Dado> dados = new ArrayList<>();
        List<CreateLog> logs = new ArrayList<>();

        int sucessos = 0;
        int erros = 0;

        logs.add(CreateLog.log(NivelLog.INFO, TipoLog.READ_START));

        try (FileInputStream fis = new FileInputStream(arquivo);
             Workbook workbook = new XSSFWorkbook(fis)) {

            Sheet planilha = workbook.getSheetAt(0);
            boolean primeiraLinha = true;

            for (Row linha : planilha) {
                if (primeiraLinha) {
                    primeiraLinha = false;
                    continue;
                }

                Dado dado = new Dado();
                int errosNaLinha = 0;


                if (linha.getRowNum() < planilha.getPhysicalNumberOfRows()) {

                    try {
                        dado.setCdgCidade(getInt(linha, 0));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setSexo(getInt(linha, 1));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setPeso(getFloat(linha, 2));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setAltura(getInt(linha, 3));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setFrequenciaRefri(getInt(linha, 4));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setQtdRefri(getInt(linha, 5));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setAlcoolismo(getBooleanFromValue(linha, 6, 1));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setFreqAlcool(getInt(linha, 7));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setExercicioFisico(getBooleanFromValue(linha, 8, 1));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setTipoExercicioFisico(getInt(linha, 9));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setFreqExercicioFisico(getInt(linha, 10));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setFumante(getBooleanFromValues(linha, 11, new int[]{1, 2}));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setQtdCigarrosDia(getInt(linha, 12));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setPesoRake(getDouble(linha, 13));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setImc(getFloat(linha, 14));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setExcPeso(getBooleanFromValue(linha, 15, 1));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setObesidade(getBooleanFromValue(linha, 16, 1));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                    try {
                        dado.setDepressao(getBooleanFromValue(linha, 17, 1));
                    } catch (Exception e) {
                        errosNaLinha++;
                    }
                }

                if (errosNaLinha > 0) {
                    erros++;
                    logs.add(CreateLog.logLineError(
                            NivelLog.ERROR,
                            TipoLog.READ_ERROR,
                            linha.getRowNum() + 1,
                            errosNaLinha
                    ));
                    System.out.println(linha.getRowNum());
                } else {
                    dados.add(dado);
                    sucessos++;
                }
            }
        }

       logs.add(CreateLog.logCustom(
               NivelLog.INFO,
               TipoLog.READ_SUCESS,
               sucessos,
               erros
       ));
        System.out.println("Total de logs na lista: " + logs.size());

        loadLog.saveLogsBatch(logs);
        return dados;
    }

    private static int getInt(Row row, int index) {
        Cell cell = row.getCell(index);
        if (cell != null && cell.getCellType() == CellType.NUMERIC) {
            return (int) cell.getNumericCellValue();
        }
        throw new IllegalArgumentException("Célula inválida ou tipo incorreto para índice " + index);
    }

    private static float getFloat(Row row, int index) {
        Cell cell = row.getCell(index);
        if (cell != null && cell.getCellType() == CellType.NUMERIC) {
            return (float) cell.getNumericCellValue();
        }
        throw new IllegalArgumentException("Célula inválida ou tipo incorreto para índice " + index);
    }

    private static double getDouble(Row row, int index) {
        Cell cell = row.getCell(index);
        if (cell != null && cell.getCellType() == CellType.NUMERIC) {
            return cell.getNumericCellValue();
        }
        throw new IllegalArgumentException("Célula inválida ou tipo incorreto para índice " + index);
    }

    private static boolean getBooleanFromValue(Row row, int index, int expected) {
        Cell cell = row.getCell(index);
        if (cell != null && cell.getCellType() == CellType.NUMERIC) {
            return (int) cell.getNumericCellValue() == expected;
        }
        throw new IllegalArgumentException("Célula inválida ou tipo incorreto para índice " + index);
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
            return false;
        }
        throw new IllegalArgumentException("Célula inválida ou tipo incorreto para índice " + index);
    }

}
