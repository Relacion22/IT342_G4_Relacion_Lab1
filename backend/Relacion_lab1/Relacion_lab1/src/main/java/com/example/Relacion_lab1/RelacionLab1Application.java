package com.example.Relacion_lab1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.Relacion_lab1") // Add this line!
public class RelacionLab1Application {
    public static void main(String[] args) {
        SpringApplication.run(RelacionLab1Application.class, args);
    }
}