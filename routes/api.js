const router = require('express').Router();
const apiController = require('../controllers/api');

router.get('/', apiController.welcome);

module.exports = router;
