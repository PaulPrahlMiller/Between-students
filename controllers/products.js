const signale = require('signale');
const Product = require('../models/Product');
const { removeValidation } = require('../validation');

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
    // Check for existing product that belongs to user
    // Logged in user can only delete owned products
    let product = await Product.findOneAndDelete({
      _id: req.body.product_id,
      owner_id: req.user.id
    });

    // If product is null, it was not found in the database or does not belong
    // to the user
    if (!product) {
      signale.fatal('Product does not exist :(');
      return res.status(400).json({
        message: `Product could not be found`
      });
    }

    // Successful response
    signale.complete(`Product with id ${req.body.product_id}, removed!`);
    res.status(200).json({
      message: `Product of id ${req.body.product_id}, succefully removed!`
    });
  } catch (error) {
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
      description: req.body.description
    });
    // Save the product in database
    product = await product.save();
    // Successful response
    signale.complete('Product added!');
    res.status(201).json({ product });
  } catch (error) {
    console.error(error);
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
