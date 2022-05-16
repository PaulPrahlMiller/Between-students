const router = require('express').Router();
const authUser = require('../middleware/auth');
const multer = require('../middleware/uploadMulter');
const {
  getProducts,
  getLoggedInUserProduct,
  removeProduct,
  addProduct
} = require('../controllers/products');

// Get all products - GET /api/products
router.get('/', getProducts);

// Create a new product - POST /api/products
router.post('/', authUser, multer.single('productImage'), addProduct);

// Delete a product - DELETE /api/products
router.delete('/', authUser, removeProduct);

// Get logged in users products - GET /api/products/user
router.get('/user', authUser, getLoggedInUserProduct);

module.exports = router;
