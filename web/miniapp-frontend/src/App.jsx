import { useState } from "react";
import "./App.css";
import Login from "./login";
import Register from "./Register"; 
import Dashboard from "./Dashboard";

function App() {
  // We use "view" to switch between the three screens
  const [view, setView] = useState("login"); 

  return (
    <div className="App">
      <main className="container">
        {/* Logic to show the correct component based on state */}
        {view === "login" && (
          <Login 
            onLoginSuccess={() => setView("dashboard")} 
            onSwitchToRegister={() => setView("register")} 
          />
        )}

        {view === "register" && (
          <Register 
            onRegisterSuccess={() => setView("login")} 
            onSwitchToLogin={() => setView("login")}
          />
        )}

        {view === "dashboard" && (
          <Dashboard onLogout={() => setView("login")} />
        )}
      </main>
      
      <footer className="footer">
        © 2026 Mini App System | Secure Session
      </footer>
    </div>
  );
}

export default App;