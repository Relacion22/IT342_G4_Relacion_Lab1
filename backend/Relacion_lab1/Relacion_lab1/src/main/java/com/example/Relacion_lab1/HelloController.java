package com.example.Relacion_lab1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // This tells Spring this class handles web requests
public class HelloController {

    @GetMapping("/hello") // This maps the URL localhost:8080/hello to this method
    public String sayHello() {
        return "Hello! Your Spring Boot app is working perfectly.";
    }
}