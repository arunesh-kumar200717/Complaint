const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { authenticate } = require('../middleware/auth');

router.get('/stats', authenticate, dashboardController.stats);
router.get('/summary', authenticate, dashboardController.summary);
router.get('/recent', authenticate, dashboardController.recent);
router.get('/charts', authenticate, dashboardController.charts);

module.exports = router;