# AccessHub - User Authentication System

### Project Description
[cite_start]**AccessHub** is a secure authentication system designed to bridge user access across web and mobile platforms[cite: 7]. [cite_start]The system focuses on secure user onboarding and session management, ensuring that sensitive data like passwords are never stored in plain text [cite: 46, 67] [cite_start]and that system resources are protected by industry-standard authentication filters[cite: 68].

### Technologies Used
* [cite_start]**Backend:** Java 19, Spring Boot 4.0.2, Spring Data JPA, Spring Security (BCrypt & JWT)[cite: 26, 27, 33, 40, 45].
* [cite_start]**Database:** MySQL (Persistence) and H2 (Development/Testing)[cite: 34, 41].
* [cite_start]**Web App:** React.js, Axios, React Router[cite: 32].
* **Mobile App:** React Native, Expo.

---

### 🚀 Steps to Run Backend
1.  **Database Configuration**:
    * [cite_start]Create a MySQL database: `CREATE DATABASE accesshub_db;`[cite: 41, 44].
    * Open `src/main/resources/application.properties` and update:
        ```properties
        spring.datasource.url=jdbc:mysql://localhost:3306/accesshub_db
        spring.datasource.username=YOUR_USER
        spring.datasource.password=YOUR_PASSWORD
        ```
2.  **Dependencies**:
    * Open the project in IntelliJ IDEA.
    * Click the **Maven** tab and click **Reload All Maven Projects** to download necessary libraries.
3.  **Run**:
    * Locate `RelacionLab1Application.java` in `src/main/java/com/example/Relacion_lab1/`.
    * Right-click and select **Run 'RelacionLab1Application'**.
    * The backend will start at `http://localhost:8080`.

---

### 🌐 Steps to Run Web App
1.  Open your terminal and navigate to the web project folder:
    ```bash
    cd accesshub-web
    ```
2.  Install the required packages:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm start
    ```
4.  The browser will open `http://localhost:3000` automatically.

---

### 📱 Steps to Run Mobile App
1.  Navigate to the mobile project folder:
    ```bash
    cd accesshub-mobile
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Expo bundler:
    ```bash
    npx expo start
    ```
4.  Use the **Expo Go** app on your phone to scan the QR code displayed in the terminal.

---

### 📡 List of API Endpoints
[cite_start]All endpoints are managed by the `AuthController`[cite: 111].

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | [cite_start]Registers a new user; hashes password via BCrypt[cite: 53, 55]. |
| **POST** | `/api/auth/login` | [cite_start]Authenticates user; returns a JWT session token[cite: 61, 62]. |
| **POST** | `/api/auth/logout` | [cite_start]Clears the session and invalidates the token[cite: 65]. |
| **GET** | `/api/auth/profile` | [cite_start]Fetches details for the currently logged-in user[cite: 63]. |

---

### 📂 Folder Structure
* [cite_start]**com.example.Relacion_lab1.model**: Contains the `User` entity (ERD) [cite: 74-87].
* [cite_start]**com.example.Relacion_lab1.repository**: Data access logic[cite: 113].
* [cite_start]**com.example.Relacion_lab1.service**: Business logic and security processing[cite: 112].
* [cite_start]**com.example.Relacion_lab1.controller**: REST API endpoints[cite: 111].

[cite_start]**Prepared By:** Reden Misael Relacion [cite: 8]  
[cite_start]**Version:** 1.0.0 [cite: 10]
