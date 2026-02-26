const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');

router.get('/complaints', authenticate, (req, res) => {
    res.json({ success: true, message: 'All complaints' });
});

router.get('/users', authenticate, (req, res) => {
    res.json({ success: true, message: 'All users' });
});

router.delete('/users/:id', authenticate, (req, res) => {
    res.json({ success: true, message: 'User deleted' });
});

router.delete('/complaints/:id', authenticate, (req, res) => {
    res.json({ success: true, message: 'Complaint deleted' });
});

module.exports = router;