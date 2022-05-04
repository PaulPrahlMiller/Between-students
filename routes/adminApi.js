'use strict';
const router = require('express').Router();
const adminApiController = require('./adminApiController.js');


// User Operations

router.post('/addUser', adminApiController.addUser);
router.delete('/deleteUser', adminApiController.deleteUser);
router.patch('/updateUser', authUser, adminApiController.updateUser);


// Product Operations

router.post('/addProduct', adminApiController.addProduct);
router.delete('/deleteProduct', adminApiController.deleteProduct);
router.patch('/updateProduct', authUser, adminApiController.updateProduct);


module.exports = router;
