package sptech.whensix;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.concurrent.ThreadLocalRandom;

public class Log {
    public static void getLog(String[] proccess) {
        LocalDate currentDate = LocalDate.now();
        LocalTime currentTime = LocalTime.now();
        String currentDateTime = currentDate + " " + currentTime;
        Integer state = ThreadLocalRandom.current().nextInt(1, 3);
        Integer sleepTime = 0;

        System.out.println(String.format("Iniciando extração de dados. Data e hora: %s", currentDateTime));

        for(int i = 0; i < proccess.length; i++) {
            try {
                sleepTime = ThreadLocalRandom.current().nextInt(3000, 5000);

                Thread.sleep(sleepTime);
                currentDate = LocalDate.now();
                currentTime = LocalTime.now();
                currentDateTime = currentDate + " " +currentTime;

                System.out.println(String.format("Processo: %s terminado com o estado: %d. Data e hora: %s", proccess[i], state, currentDateTime));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        currentDate = LocalDate.now();
        currentTime = LocalTime.now();
        currentDateTime = currentDate + " " +currentTime;
        System.out.println(String.format("Finalizada extração de dados. Data e hora: %s", currentDateTime));

    }


}
