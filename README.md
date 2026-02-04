AccessHub - User Authentication System
AccessHub is a secure full-stack web application designed for user registration and authentication. It features a Spring Boot backend and a React frontend, implementing BCrypt password hashing and JWT-based session management.

🚀 Features
User Registration: Secure sign-up with email validation.

Secure Login: Authentication using BCrypt encrypted passwords.

Session Management: JWT tokens for protected dashboard access.

Persistence: MySQL database integration for user data.

🛠️ Tech Stack
Backend: Java 17+, Spring Boot 4.0.2, Spring Security, JPA/Hibernate.

Database: MySQL 8.0+.

Frontend: React.js (mapped to localhost:3000).

📋 Prerequisites
Before running the application, ensure you have the following installed:

JDK 17 or 19

MySQL Server

IntelliJ IDEA (Community or Ultimate)

Node.js & npm (for the frontend)

🔧 Installation & Setup
1. Database Setup
Open your MySQL Workbench or Terminal.

Create a new database:

SQL
CREATE DATABASE accesshub_db;
2. Backend Setup (Spring Boot)
Open the project in IntelliJ IDEA.

Navigate to src/main/resources/application.properties.

Update the database credentials to match your MySQL setup:

Properties
spring.datasource.url=jdbc:mysql://localhost:3306/accesshub_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
Open the Maven tab on the right side of IntelliJ and click "Reload All Maven Projects" to install dependencies.

Run the RelacionLab1Application.java file.

The server will start on http://localhost:8080.

3. Frontend Setup (React)
Open a new terminal in your frontend folder.

Install dependencies:

Bash
npm install
Start the React application:

Bash
npm start
The site will open automatically at http://localhost:3000.

📂 Project Structure
Plaintext
backend/
 └── src/main/java/com/example/Relacion_lab1/
      ├── config/     # Security & JWT Configurations
      ├── controller/ # API Endpoints (Auth, User)
      ├── model/      # ERD Entities (User.java)
      ├── repository/ # Database Access
      └── service/    # Business Logic (BCrypt hashing)
🧪 Testing the API
You can test the backend endpoints using Postman:

POST http://localhost:8080/api/auth/register

POST http://localhost:8080/api/auth/login

📝 License
Distributed under the MIT License. See LICENSE for more information.

Author: Reden Misael Relacion

Project: AccessHub (CIT-U IT342)
