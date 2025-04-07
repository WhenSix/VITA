package sptech.whensix.database;

import sptech.whensix.config.Config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Banco {
    public static Connection conectar() throws SQLException {
        String host = Config.get("DB_HOST");
        String port = Config.get("DB_PORT");
        String dbName = Config.get("DB_NAME");
        String user = Config.get("DB_USER");
        String password = Config.get("DB_PASSWORD");

        String url = "jdbc:mysql://" + host + ":" + port + "/" + dbName + "?useSSL=false&serverTimezone=UTC";
        return DriverManager.getConnection(url, user, password);
    }
}
