package com.example.Relacion_lab1.controller;

import com.example.Relacion_lab1.model.User;
import com.example.Relacion_lab1.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allows React frontend access
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Feature 1: User Registration [cite: 49, 50]
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User savedUser = authService.registerUser(user);
            return ResponseEntity.ok(savedUser); // REQ-1.4: Success leads to login [cite: 56]
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Feature 2: Authentication & Login [cite: 57, 58]
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        try {
            String token = authService.authenticate(
                credentials.get("email"), 
                credentials.get("password")
            );
            return ResponseEntity.ok(Map.of("token", token)); // REQ-2.2 [cite: 62]
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid Email or Password");
        }
    }

    // REQ-2.4: Logout [cite: 65]
    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok("Logged out successfully");
    }
}