import React , {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage'; // Import MainPage component
// src/App.js
import AdminDashboard from './components/AdminDashboard';
import ReportsPage from './components/ReportsPage'; // Correct import path for ReportsPage


const App = () => {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />} /> {/* Add this line */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/reports" element={<ReportsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
