const express = require('express');
const router = express.Router();
const multer = require('multer');
const { MongoClient } = require('mongodb');
const cloudinary = require('cloudinary').v2;
const authenticateToken = require('../middleware/authenticateToken'); // Assuming you moved `authenticateToken` to a middleware file

// MongoDB and Cloudinary setup (make sure to configure this in your main file or environment variables)
const client = new MongoClient('mongodb://localhost:27017/');
const dbName = 'HealthCare';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Report Upload Endpoint
router.post('/upload', authenticateToken, upload.single('report'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'medical_reports',
            resource_type: 'auto' // 'auto' allows all file types (images, videos, docs)
        });

        const db = client.db(dbName);
        const reportsCollection = db.collection('Reports');
        await reportsCollection.insertOne({
            userId: req.user.userId,
            reportUrl: result.secure_url,
            uploadDate: new Date(),
            fileName: req.file.originalname,
            fileType: req.file.mimetype
        });

        res.status(201).json({ message: 'Report uploaded successfully', reportUrl: result.secure_url });
    } catch (error) {
        console.error('Error uploading report:', error);
        res.status(500).json({ message: 'Error uploading report' });
    }
});

// Fetch Reports Endpoint
router.get('/', authenticateToken, async (req, res) => {
    try {
        const db = client.db(dbName);
        const reportsCollection = db.collection('Reports');
        const reports = await reportsCollection.find({ userId: req.user.userId }).toArray();
        res.status(200).json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ message: 'Error fetching reports' });
    }
});

module.exports = router;
