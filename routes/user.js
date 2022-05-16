const router = require('express').Router();
const authUser = require('../middleware/auth');
const { getLoggedInUser } = require('../controllers/user');

// Get logged in user - GET /api/user
router.get('/', authUser, getLoggedInUser);

module.exports = router;
