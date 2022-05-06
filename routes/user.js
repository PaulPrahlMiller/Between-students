const router = require('express').Router();
const authUser = require('../middleware/auth');
const {
  getLoggedInUser,
  getLoggedInUserProduct,
  getUsers
} = require('../controllers/user');

router.get('/', authUser, getLoggedInUser);
router.get('/users', getUsers);

module.exports = router;
