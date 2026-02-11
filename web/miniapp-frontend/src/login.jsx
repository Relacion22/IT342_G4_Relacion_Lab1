import { useState } from "react";
import "./App.css";

// Ensure 'onSwitchToRegister' is included in the braces below!
const Login = ({ onLoginSuccess, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Your backend is running on port 8080
    console.log("Attempting login for:", email);
    onLoginSuccess(); 
  };

  return (
    <div className="card">
      <h2>Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email" 
            required 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password" 
            required 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
        Don't have an account? 
        <span 
          style={{ 
            color: '#6366f1', 
            cursor: 'pointer', 
            fontWeight: 'bold', 
            marginLeft: '5px' 
          }} 
          onClick={onSwitchToRegister}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;