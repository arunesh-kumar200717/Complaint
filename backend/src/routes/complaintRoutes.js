const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, complaintController.getAllComplaints);
router.post('/', authenticate, complaintController.createComplaint);
router.get('/:id', authenticate, complaintController.getComplaintById);
router.put('/:id', authenticate, complaintController.updateComplaint);
router.delete('/:id', authenticate, complaintController.deleteComplaint);

module.exports = router;