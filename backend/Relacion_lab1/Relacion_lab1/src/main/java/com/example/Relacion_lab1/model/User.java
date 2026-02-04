package com.example.Relacion_lab1.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users") // Matches your ERD table name [cite: 90]
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // bigint, PK Primary Key [cite: 75, 76, 104]

    @Column(unique = true, nullable = false)
    private String email; // string, UK Unique, Not Null [cite: 77, 78, 105]

    @Column(name = "password_hash", nullable = false)
    private String passwordHash; // string, BCrypt Encrypted [cite: 79, 80, 106]

    @Column(name = "first_name")
    private String firstName; // string [cite: 81, 82]

    @Column(name = "last_name")
    private String lastName; // string [cite: 83, 84]

    @Column(nullable = false)
    private String role = "USER"; // string, Default USER [cite: 85, 86, 107]

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now(); // timestamp 

    // --- Getters and Setters ---
    // You can generate these in IntelliJ: Right-click -> Generate -> Getter and Setter

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPasswordHash() { return passwordHash; }
    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}