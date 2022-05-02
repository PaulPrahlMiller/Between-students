'use strict';
const router = require('express').Router();
const apiController = require('./apiController');
const { upload } = require('../middleware/upload');
const { singleFileUpload } = require('../controllers/upload');

router.post('/add', upload.single('productImage'), singleFileUpload);

router.get('/', apiController.welcome);
router.get('/products', apiController.getProducts);
router.get('/users', apiController.getUsers);
//router.get('/category', apiController.getCategories)
router.post('/register', apiController.register);
router.post('/login', apiController.login);
router.get('/mydetails', apiController.myDetails);
router.post('/addproduct', apiController.addProduct);
router.delete('/removeproduct', apiController.removeProduct);
router.get('/myproducts', apiController.myProducts);
module.exports = router;
