const router = require('express').Router();
const authUser = require('../middleware/auth');
const { upload } = require('../middleware/upload');
const {
  getProducts,
  getLoggedInUserProduct,
  removeProduct,
  addProduct
} = require('../controllers/products');

// Get all products
router.get('/', getProducts);
// Create a new product
router.post('/', authUser, upload.single('productImage'), addProduct);
// Delete a product
router.delete('/', authUser, removeProduct);
// Get current users products
router.get('/user', authUser, getLoggedInUserProduct);

module.exports = router;
