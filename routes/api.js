'use strict';
const router = require('express').Router();
const { upload } = require('../middleware/upload');
const { singleFileUpload } = require('../controllers/upload');
const apiController = require('../controllers/api');
const Product = require('../models/Product');

router.get('/', apiController.welcome);
router.post('/add', upload.single('productImage'), singleFileUpload);

router.get('/items', (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
