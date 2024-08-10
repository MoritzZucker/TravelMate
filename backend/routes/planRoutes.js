const express = require('express');
const router = express.Router();
const { createPlan, getPlans } = require('../controllers/planController');
const { protect } = require('../middleware/authMiddleware');

router.post('/plans', protect, createPlan);
router.get('/plans', protect, getPlans);

module.exports = router;
