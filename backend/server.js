const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const path = require('path');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

// MongoDB connection setup
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);
const dbName = 'HealthCare';
const JWT_SECRET = 'your_jwt_secret';

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Import and use the reports route
const reportRoutes = require('./routes/reports'); // Ensure this path is correct
app.use('/api/reports', reportRoutes);

// Connect to MongoDB
client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Helper function for JWT authentication (consider moving to a separate middleware file)
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send('Invalid Token');
        req.user = user;
        next();
    });
}
// Signup endpoint
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    try {
        const db = client.db(dbName);
        const collection = db.collection('Users');

        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { username, email, password: hashedPassword };
        const result = await collection.insertOne(newUser);

        res.status(201).send('User created');
    } catch (err) {
        console.error('Error during signup:', err.message || err);
        res.status(500).send('Signup failed');
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const db = client.db(dbName);
        const collection = db.collection('Users');

        const user = await collection.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




