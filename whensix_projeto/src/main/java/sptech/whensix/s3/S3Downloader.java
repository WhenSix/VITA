package sptech.whensix.s3;

import software.amazon.awssdk.auth.credentials.AwsSessionCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import sptech.whensix.config.Config;

import java.io.File;
import java.nio.file.Paths;

public class S3Downloader {

    public static File baixarArquivo(String nomeArquivoS3, String destinoLocal) {
        AwsSessionCredentials credentials = AwsSessionCredentials.create(
                Config.get("AWS_ACCESS_KEY_ID"),
                Config.get("AWS_SECRET_ACCESS_KEY"),
                Config.get("AWS_SESSION_TOKEN")
        );

        S3Client s3 = S3Client.builder()
                .region(Region.of(Config.get("AWS_REGION")))
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .build();

        String bucket = Config.get("BUCKET_NAME");

        if (!verificarExistenciaArquivo(s3, bucket, nomeArquivoS3)) {
            System.err.println("Erro: O arquivo " + nomeArquivoS3 + " não existe no S3.");
            return null;
        }

        GetObjectRequest request = GetObjectRequest.builder()
                .bucket(bucket)
                .key(nomeArquivoS3)
                .build();

        File arquivoLocal = Paths.get(destinoLocal).toFile();

        try {
            s3.getObject(request, Paths.get(destinoLocal));
            System.out.println("Arquivo baixado com sucesso!");
            return arquivoLocal;
        } catch (NoSuchKeyException e) {
            System.err.println("Erro: O arquivo não foi encontrado no S3.");
        } catch (S3Exception e) {
            System.err.println("Erro ao acessar o S3: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Erro inesperado: " + e.getMessage());
        }

        return null;
    }

    private static boolean verificarExistenciaArquivo(S3Client s3Client, String bucketName, String key) {
        try {
            HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .build();
            s3Client.headObject(headObjectRequest);
            return true;
        } catch (NoSuchKeyException e) {
            return false;
        } catch (S3Exception e) {
            System.err.println("Erro ao verificar o arquivo: " + e.getMessage());
            return false;
        }
    }
}