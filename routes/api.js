'use strict';
const router = require('express').Router();
const apiController = require('./apiController.js');
// Middleware to authorize a user request
const authUser = require('../middleware/auth');

const { upload } = require('../middleware/upload');
// const { singleFileUpload } = require('../controllers/upload');

router.post(
  '/addproduct',
  upload.single('productImage'),
  apiController.addProduct
);

router.get('/products', apiController.getProducts);
router.get('/users', apiController.getUsers);
router.get('/user', authUser, apiController.getLoggedInUser);
//router.get('/category', apiController.getCategories)
router.post('/register', apiController.register);
router.post('/login', apiController.login);
// router.get('/myDetails', authUser, apiController.myDetails);
// router.post('/addProduct', apiController.addProduct);
router.delete('/removeProduct', apiController.removeProduct);

module.exports = router;
