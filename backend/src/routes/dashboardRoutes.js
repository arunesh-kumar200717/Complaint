const express = require('express');
const router = express.Router();

// Dashboard route endpoints

// Endpoint for stats
router.get('/stats', (req, res) => {
    res.json({ message: 'Stats data' });
});

// Endpoint for summary
router.get('/summary', (req, res) => {
    res.json({ message: 'Summary data' });
});

// Endpoint for recent complaints
router.get('/recent-complaints', (req, res) => {
    res.json({ message: 'Recent complaints data' });
});

// Endpoint for charts
router.get('/charts', (req, res) => {
    res.json({ message: 'Charts data' });
});

module.exports = router;