const signale = require('signale');
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  // NO NEED FOR AUTHORIZATION
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.removeProduct = async (req, res) => {
  signale.pending('A user trying to remove/delete a product');
  try {
    // Validate the request
    const { error } = removeValidation(req.body);
    if (error) {
      signale.fatal('Remove input validation failed :(');
      // The message is from the joi object in validation.js
      return res.status(400).json({ message: error.details[0].message });
    }
    // Check for existing product
    let product = await Product.findById(req.body.product_id);
    if (!product) {
      signale.fatal('Product does not exist :(');
      return res.status(400).json({
        message: `Product with ID ${req.body.product_id} could not be found`
      });
    }
    // Should check the product belongs to the logged in user.
    if (!(product.owner_id === req.user.id)) {
      signale.fatal('User not authorized to delete the product');
      // Unauthorized response
      return res
        .status(403)
        .json({ message: 'User not authorized to delete that product' });
    }

    // Delete the product
    product = await product.deleteOne();

    // Successful response
    signale.complete(`Product of id ${req.product_id}, successfully removed!`);
    res.json({
      message: `Product of id ${req.product_id}, succefully removed!`
    });
  } catch (err) {
    signale.fatal('Something went wrong while removing ... ');
    res.status(500).send('Server error');
  }
};

exports.addProduct = async (req, res) => {
  signale.pending('A user is trying to add a product!');
  try {
    // Create new product
    let product = new Product({
      title: req.body.title,
      category: req.body.category,
      owner_id: req.user.id,
      cost: req.body.cost,
      productImage: req.file.filename,
      description: req.body.description // DESCRIPTION MUST BE DEFINED IN THE REQUEST - AT LEAST ""
    });
    // Save the product in database
    product = await product.save();
    // Successful response
    signale.complete('Product added!');
    res.status(201).json({ product });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getLoggedInUserProduct = async (req, res) => {
  try {
    const productsList = await Product.find({ owner_id: req.user.id });
    res.json(productsList);
  } catch (error) {
    signale.fatal('Server error when retrieving products');
    res.status(500).json('Server error');
  }
};
