import { useState } from 'react';
import axios from 'axios';

const Register = () => {
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
            // This sends data to your Spring Boot @RestController
            const response = await axios.post('http://localhost:8080/api/auth/register', formData);
            alert("Success! User added to XAMPP database.");
        } catch (error) {
            console.error(error);
            alert("Error: Make sure Spring Boot is running!");
        }
    };

    return (
        <div className="card" style={{ textAlign: 'left', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Registration</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email (Username)" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" style={{ backgroundColor: '#646cff' }}>Register</button>
            </form>
        </div>
    );
};

export default Register;