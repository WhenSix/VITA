package sptech.whensix.database;

import org.apache.commons.dbcp2.BasicDataSource;
import sptech.whensix.config.Config;
import javax.sql.DataSource;

public class Banco {

    private static BasicDataSource dataSource;

    static {
        String host = Config.get("DB_HOST");
        String port = Config.get("DB_PORT");
        String dbName = Config.get("DB_NAME");
        String user = Config.get("DB_USER");
        String password = Config.get("DB_PASSWORD");

        String url = "jdbc:mysql://" + host + ":" + port + "/" + dbName + "?useSSL=false&serverTimezone=UTC";

        dataSource = new BasicDataSource();
        dataSource.setUrl(url);
        dataSource.setUsername(user);
        dataSource.setPassword(password);
        dataSource.setMinIdle(5);
        dataSource.setMaxIdle(10);
        dataSource.setMaxOpenPreparedStatements(100);
    }

    public static DataSource getDataSource() {
        return dataSource;
    }

}