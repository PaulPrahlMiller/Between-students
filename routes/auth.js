const router = require('express').Router();
const { login, register } = require('../controllers/auth');

// Login user - /api/auth/login
router.post('/login', login);

// Register user - /api/auth/register
router.post('/register', register);

module.exports = router;
