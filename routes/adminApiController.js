const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const signale = require('signale');
require('dotenv').config();
const {
  registerValidation,
  loginValidation,
  addProductValidation,
  removeValidation
} = require('../validation');



// USERS CONTROLLER
exports.addUser = async (req, res)=>{

}

exports.deleteUser = async (req, res)=>{

}
exports.updateUser = async (req, res)=>{

}

// PRODUCTS CONTROLLER
exports.addProduct = async (req, res)=>{

}
exports.deleteProduct = async (req, res)=>{

}
exports.updateProduct = async (req, res)=>{

}
