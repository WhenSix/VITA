package sptech.whensix.utils;

import org.apache.poi.ss.usermodel.Row;

public interface LogFunctional {
    @FunctionalInterface
    public interface LogFunction<T> {
        T apply(Row row, int index);
    }
}
