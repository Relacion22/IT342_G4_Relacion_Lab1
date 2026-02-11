package com.example.Relacion_lab1.service;

import com.example.Relacion_lab1.model.User;
import com.example.Relacion_lab1.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(User user) {
        String rawPassword = user.getPassword();
        if (rawPassword == null || rawPassword.isEmpty()) {
            throw new RuntimeException("Password is required");
        }
        user.setPasswordHash(passwordEncoder.encode(rawPassword));
        return userRepository.save(user);
    }

    // THIS IS THE MISSING METHOD
    public String authenticate(String email, String password) {
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (passwordEncoder.matches(password, user.getPasswordHash())) {
                return "dummy-jwt-token";
            }
        }
        throw new RuntimeException("Invalid Email or Password");
    }
}