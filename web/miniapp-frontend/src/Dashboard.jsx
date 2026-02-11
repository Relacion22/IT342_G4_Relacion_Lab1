import { useState } from 'react';
import Profile from './Profile';
import "./App.css";

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    /* This outer div ensures everything is centered on the screen */
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh', // Centers vertically in the viewport
      width: '100%' 
    }}>
      
      {/* Centered Navigation Bar */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        marginBottom: '30px',
        padding: '10px',
        width: '100%',
        maxWidth: '400px', // Limits width so links stay close together
        borderBottom: '1px solid #ddd'
      }}>
        <span 
          onClick={() => setActiveTab('home')} 
          style={{ 
            cursor: 'pointer', 
            fontWeight: activeTab === 'home' ? 'bold' : 'normal',
            color: activeTab === 'home' ? '#646cff' : '#666',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          🏠 Dashboard
        </span>
        <span 
          onClick={() => setActiveTab('profile')} 
          style={{ 
            cursor: 'pointer', 
            fontWeight: activeTab === 'profile' ? 'bold' : 'normal',
            color: activeTab === 'profile' ? '#646cff' : '#666',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          👤 My Profile
        </span>
      </nav>

      {/* Centered Content Card */}
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        {activeTab === 'home' ? (
          <>
            <h2 style={{ textAlign: 'center' }}>User Dashboard</h2>
            <div style={{ textAlign: 'left', margin: '20px 0', padding: '0 20px' }}>
              <p><strong>Status:</strong> <span style={{ color: '#10b981' }}>Connected to XAMPP</span></p>
              <p><strong>Role:</strong> Administrator</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button onClick={onLogout} style={{ backgroundColor: '#ef4444', width: '80%' }}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <Profile />
        )}
      </div>
    </div>
  );
};

export default Dashboard;