package sptech.whensix.database;
/*
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
 */

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;
import java.sql.SQLException;

public class Banco {

    private final JdbcTemplate jdbcTemplate;
    private final BasicDataSource basicDataSource;

    public Banco() {
        this.basicDataSource = new BasicDataSource();
        this.basicDataSource.setUrl("jdbc:mysql://localhost:3306/whensix?useSSL=false&serverTimezone=UTC");
        this.basicDataSource.setUsername("root");
        this.basicDataSource.setPassword("Manobabidi00");

        this.jdbcTemplate = new JdbcTemplate(this.basicDataSource);
    }

    public BasicDataSource getBasicDataSource() {
        return basicDataSource;
    }

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }
}

