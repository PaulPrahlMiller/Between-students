const router = require('express').Router();
const apiController = require('./apiController.js');

router.get('/', apiController.welcome);
router.get('/products', apiController.getProducts)
router.get('/users', apiController.getUsers)
//router.get('/category', apiController.getCategories)
router.post('/register', apiController.register)
router.post('/login', apiController.login)
router.get('/myDetails', apiController.myDetails)
router.post('/addProduct', apiController.addProduct)
router.delete('/removeProduct', apiController.removeProduct)

module.exports = router;