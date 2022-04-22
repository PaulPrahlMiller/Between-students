const router = require('express').Router();
const apiController = require('../controllers/api');

router.get('/', apiController.welcome);
router.get('/products', apiController.products)
router.get('/users', apiController.users)

module.exports = router;
