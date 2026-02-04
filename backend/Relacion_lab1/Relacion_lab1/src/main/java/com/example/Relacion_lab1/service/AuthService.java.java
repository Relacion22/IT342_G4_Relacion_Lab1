package com.example.Relacion_lab1.service;

import com.example.Relacion_lab1.model.User;
import com.example.Relacion_lab1.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder(); // Matches REQ-1.3 [cite: 55]
    }

    public User registerUser(User user) {
        // REQ-1.2: Verify email is not already registered 
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already in use");
        }
        
        // REQ-1.3: Encrypt password before saving [cite: 55]
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
        return userRepository.save(user);
    }

    public String authenticate(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // REQ-2.1: Validate credentials [cite: 61]
        if (passwordEncoder.matches(password, user.getPasswordHash())) {
            return "mock-jwt-token"; // REQ-2.2: Generate JWT (Logic would go here) [cite: 62]
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}