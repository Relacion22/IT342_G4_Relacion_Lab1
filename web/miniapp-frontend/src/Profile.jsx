import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Retrieves the email you stored in Register.jsx
                const email = localStorage.getItem('userEmail');
                
                if (!email) {
                    throw new Error("No user session found. Please register/login.");
                }

                // Requesting the user details from Spring Boot (Port 8080)
                const response = await axios.get(`http://localhost:8080/api/auth/profile?email=${email}`);
                setUser(response.data);
            } catch (err) {
                console.error("Profile Fetch Error:", err);
                setError(err.response?.data || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading your info...</div>;
    if (error) return <div style={{ color: '#ef4444', textAlign: 'center', padding: '20px' }}>{error}</div>;

    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Account Information</h2>
            
            {/* Centered Info List */}
            <div style={{ 
                textAlign: 'left', 
                backgroundColor: '#f9f9f9', 
                padding: '20px', 
                borderRadius: '8px',
                border: '1px solid #eee',
                display: 'inline-block',
                minWidth: '250px'
            }}>
                <p style={{ margin: '10px 0' }}>
                    <strong style={{ color: '#646cff' }}>First Name:</strong> {user?.firstName}
                </p>
                <p style={{ margin: '10px 0' }}>
                    <strong style={{ color: '#646cff' }}>Last Name:</strong> {user?.lastName}
                </p>
                <p style={{ margin: '10px 0' }}>
                    <strong style={{ color: '#646cff' }}>Email:</strong> {user?.email}
                </p>
                <p style={{ margin: '10px 0' }}>
                    <strong style={{ color: '#646cff' }}>Role:</strong> {user?.role || 'User'}
                </p>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '15px' }}>
                Data retrieved from XAMPP miniapp_db
            </p>
        </div>
    );
};

export default Profile;