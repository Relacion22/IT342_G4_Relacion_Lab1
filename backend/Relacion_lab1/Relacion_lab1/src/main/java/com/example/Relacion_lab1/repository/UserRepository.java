package com.example.Relacion_lab1.repository;

import com.example.Relacion_lab1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // This method is crucial for Login/Auth
    // It tells Spring to find the user by the 'email' column you just created
    Optional<User> findByEmail(String email);
}