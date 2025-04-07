package sptech.whensix.s3;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import sptech.whensix.config.Config;


import java.io.File;
import java.nio.file.Paths;

public class S3Downloader {
    public static File baixarArquivo(String nomeArquivoS3, String destinoLocal) {
        AwsBasicCredentials credentials = AwsBasicCredentials.create(
                Config.get("AWS_ACCESS_KEY_ID"),
                Config.get("AWS_SECRET_ACCESS_KEY")
        );

        S3Client s3 = S3Client.builder()
                .region(Region.of(Config.get("AWS_REGION")))
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .build();

        String bucket = Config.get("BUCKET_NAME");

        GetObjectRequest request = GetObjectRequest.builder()
                .bucket(bucket)
                .key(nomeArquivoS3)
                .build();

        File arquivoLocal = Paths.get(destinoLocal).toFile();
        s3.getObject(request, Paths.get(destinoLocal));

        return arquivoLocal;
    }
}
