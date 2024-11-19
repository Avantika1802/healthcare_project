// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="logo">Your Logo</div> {/* Placeholder for your logo */}
                <div className="nav-buttons">
                    <button onClick={handleSignupClick}>Signup</button>
                    <button onClick={handleLoginClick}>Login</button>
                </div>
            </nav>
            <div className="welcome-section">
                <div className="welcome-message">
                    <h1>Welcome to the Healthcare App</h1>
                    <p>Your health is our priority. Join us for a healthier tomorrow!</p>
                </div>
                <div className="image-container">
                    <img src="path_to_your_image.jpg" alt="Healthcare" /> {/* Update with your image path */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
