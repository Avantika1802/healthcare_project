const express = require('express');
const router = express.Router();
const authenticateAdmin = require('../middleware/authenticateAdmin');

// Example: Admin route to fetch all users
router.get('/users', authenticateAdmin, async (req, res) => {
    const db = req.app.locals.db; // Make sure to attach the DB client in server.js
    try {
        const users = await db.collection('Users').find().toArray();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

module.exports = router;
