// AdminDashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login');
            return;
        }

        // Decode token to verify role
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.role !== 'admin') {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin!</p>
        </div>
    );
};

export default AdminDashboard;
