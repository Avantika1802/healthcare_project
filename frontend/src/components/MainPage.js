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
// src/components/MainPage.js
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
// //import jwtDecode from 'jwt-decode'; // For decoding JWT
// import { jwtDecode } from 'jwt-decode';

// import './MainPage.css';

// const MainPageComponent = () => {
//     const [role, setRole] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Check if user is logged in
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             navigate('/login'); // Redirect to login if not authenticated
//             return;
//         }

//         // Decode JWT to get the role
//         const decodedToken = jwtDecode(token);
//         setRole(decodedToken.role); // Set the user's role
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem('authToken'); // Remove token on logout
//         navigate('/login');
//     };

//     return (
//         <div className="main-page-container">
//             <header className="main-page-navbar">
//                 <h2 className="main-page-logo">HealthCarePro</h2>
//                 <div id="google_translate_element"></div>
//                 <nav>
//                     <a href="#home" className="main-page-nav-link">Home</a>
//                     <a href="#services" className="main-page-nav-link">Services</a>
//                     <a href="#contact" className="main-page-nav-link">Contact Us</a>
//                     <a href="#about" className="main-page-nav-link">About Us</a>
//                     <Link to="/reports">
//                          <button className="main-page-reports-button">Go to My Reports</button>
//                      </Link>
//                     {/* {role === 'user' && (
//                         <Link to="/reports">
//                             <button className="main-page-reports-button">Go to My Reports</button>
//                         </Link>
//                     )}

//                     {role === 'admin' && (
//                         <Link to="/admin-dashboard">
//                             <button className="main-page-admin-button">Admin Dashboard</button>
//                         </Link>
//                     )} */}
                    
//                     <button onClick={handleLogout} className="main-page-logout-button">Logout</button>
//                 </nav>
//             </header>
            
//             <section className="main-page-welcome-section">
//                 <h1 className="main-page-welcome-title">
//                     Welcome to HealthCarePro
//                 </h1>
//                 <p className="main-page-welcome-text">
//                     {role === 'admin' 
//                         ? 'Hello Admin! Manage the platform and support our users.' 
//                         : 'Your health, our priority. Explore our services designed to support your well-being and health goals.'}
//                 </p>
//                 <button className="main-page-explore-button">Explore Services</button>
//             </section>
            
//             <section id="services" className="main-page-services-section">
//                 <h2 className="main-page-services-title">Our Services</h2>
//                 <div className="main-page-services-container">
//                     <div className="main-page-service-card">
//                         <h3 className="main-page-service-title">General Checkup</h3>
//                         <p className="main-page-service-text">Regular health checkups to keep you in top shape.</p>
//                     </div>
//                     <div className="main-page-service-card">
//                         <h3 className="main-page-service-title">Consultation</h3>
//                         <p className="main-page-service-text">Speak with specialists for personalized health advice.</p>
//                     </div>
//                     <div className="main-page-service-card">
//                         <h3 className="main-page-service-title">Pharmacy</h3>
//                         <p className="main-page-service-text">Access medications with ease and convenience.</p>
//                     </div>
//                 </div>
//             </section>

//             <footer className="main-page-footer">
//                 <p className="main-page-footer-text">&copy; 2024 HealthCarePro. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default MainPageComponent;
