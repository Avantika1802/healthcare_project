// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MainPage.css';

const MainPageComponent = () => {
    return (
        <div className="main-page-container">
            <header className="main-page-navbar">
                <h2 className="main-page-logo">HealthCarePro</h2>
                <div id="google_translate_element"></div>
                <nav>
                    <a href="#home" className="main-page-nav-link">Home</a>
                    <a href="#services" className="main-page-nav-link">Services</a>
                    <a href="#contact" className="main-page-nav-link">Contact Us</a>
                    <a href="#about" className="main-page-nav-link">About Us</a>
                    <Link to="/reports">
                        <button className="main-page-reports-button">Go to My Reports</button>
                    </Link>
                </nav>
            </header>
            
            <section className="main-page-welcome-section">
                <h1 className="main-page-welcome-title">Welcome to HealthCarePro</h1>
                <p className="main-page-welcome-text">
                    Your health, our priority. Explore our services designed to support your well-being and health goals.
                </p>
                <button className="main-page-explore-button">Explore Services</button>
            </section>
            
            <section id="services" className="main-page-services-section">
                <h2 className="main-page-services-title">Our Services</h2>
                <div className="main-page-services-container">
                    <div className="main-page-service-card">
                        <h3 className="main-page-service-title">General Checkup</h3>
                        <p className="main-page-service-text">Regular health checkups to keep you in top shape.</p>
                    </div>
                    <div className="main-page-service-card">
                        <h3 className="main-page-service-title">Consultation</h3>
                        <p className="main-page-service-text">Speak with specialists for personalized health advice.</p>
                    </div>
                    <div className="main-page-service-card">
                        <h3 className="main-page-service-title">Pharmacy</h3>
                        <p className="main-page-service-text">Access medications with ease and convenience.</p>
                    </div>
                </div>
            </section>

            <footer className="main-page-footer">
                <p className="main-page-footer-text">&copy; 2024 HealthCarePro. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainPageComponent;
