package com.example.Relacion_lab1.repository;

import com.example.Relacion_lab1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // Required for REQ-1.2 to check if email exists [cite: 54, 113]
    Optional<User> findByEmail(String email);
}