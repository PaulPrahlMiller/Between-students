'use strict';
const router = require('express').Router();
const apiController = require('./apiController.js');
// Middleware to authorize a user request
const authUser = require('../middleware/auth');

const { upload } = require('../middleware/upload');
// const { singleFileUpload } = require('../controllers/upload');

router.get('/products', apiController.getProducts);
router.get('/users', apiController.getUsers);

router.get('/user', authUser, apiController.getLoggedInUser);
router.get('/userproduct', authUser, apiController.getLoggedInUserProduct);
//router.get('/category', apiController.getCategories)
router.post('/register', apiController.register);
router.post('/login', apiController.login);
router.post(
  '/addproduct',
  upload.single('productImage'),
  apiController.addProduct
);

router.delete('/removeProduct', apiController.removeProduct);

module.exports = router;
