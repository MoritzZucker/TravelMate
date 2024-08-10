const express = require('express');
const router = express.Router();
const { createGroup, getGroups } = require('../controllers/groupController');
const { protect } = require('../middleware/authMiddleware');

router.post('/groups', protect, createGroup);
router.get('/groups', protect, getGroups);

module.exports = router;
