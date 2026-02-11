import { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegisterSuccess }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', formData);
            
            console.log("Response from server:", response.data);

            // CRITICAL ADDITION: Save the email so the Profile page can use it
            localStorage.setItem('userEmail', formData.email); 
            
            alert("Success! User added to XAMPP database.");
            
            if (onRegisterSuccess) {
                onRegisterSuccess();
            }
        } catch (error) {
            console.error("Registration Error:", error.response ? error.response.data : error.message);
            const errorMsg = error.response ? `Server Error: ${error.response.data}` : "Error: Make sure Spring Boot is running!";
            alert(errorMsg);
        }
    };

    return (
        <div className="card" style={{ textAlign: 'left', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Registration</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
                <input name="email" type="email" placeholder="Email (Username)" onChange={handleChange} value={formData.email} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
                <button type="submit" style={{ backgroundColor: '#646cff' }}>Register</button>
            </form>
        </div>
    );
};

export default Register;