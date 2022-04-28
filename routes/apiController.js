const User = require('../models/User')
const Product = require('../models/Product')
const { registerValidation, loginValidation, addProductValidation, removeValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const signale = require('signale')

exports.welcome =(req, res) => {
    res.json({ message: 'Hello from the API' })
};

exports.getProducts = async (req, res)=>{
    // AUTHORISE FIRST ---- THEN
    const products = await Product.find({})
    res.json({ message: 'Now you are looking for products', data: products });
}

exports.getUsers = async (req, res)=>{
    const users = await User.find({})
    res.json({ message: 'Now you are looking for users', data: users});
}

exports.getCategories = async (req, res)=>{
    // AUTHORISE FIRST ---- THEN
    
    // VAlIDATION ON req.body CATEGORY STRING REQUEST
    
    // example -  assuming req.body = Electronics   - from req.body
    let categorySearch = "Furniture"
    const foundOfCategory = await Product.find({ category: categorySearch })
    res.json({ message: `Assuming you want ${categorySearch}, Here is your results.` , data:foundOfCategory});
}

exports.register = async (req, res)=>{
    signale.pending("A user is trying to register!")
    try {
        // Validate User
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(400).json({error: error.details[0].message});   // The message is form the joi object in validation.js
        }
        // if existing user
        const emailExist = await User.findOne({ email: req.body.email});
        if (emailExist) {
            signale.fatal("But Email exists already")
            return res.status(400).json({error: 'Email exists buddy'});
        }
        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPssword = await bcrypt.hash(req.body.password, salt);
        
        // Create new User
        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            email: req.body.email,
            password: hashPssword
        });
    
        const savedUser = await user.save();
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        signale.complete("User registered!")
        res.json({user: savedUser, "token":token});
    } catch (err) {
        res.status(400).json(err);
    }
    
}

exports.removeProduct = async(req, res)=>{
    signale.pending("A user trying to remove/delete a product")
    try {
          
        // Check if a request has a token - varify
        const token = req.header('token');
        if (!token) {
            signale.fatal('Access Denied')
            return res.status(401).json('Access Denied');
        }
        // Validate User
        const { error } = removeValidation(req.body);
        if (error) {
            signale.fatal("Remove input validation failed :(")
            return res.status(400).json({error: error.details[0].message});   // The message is form the joi object in validation.js
        }
        // if existing user
        const productExists = await Product.findOne({ _id: req.body.product_id});
        if (!productExists) {
            signale.fatal("Product does not exist :(")
            return res.status(400).json({error: 'Product does not exist :('});
        }
        // Create new User
        const product = await Product.findById(req.body.product_id)
        await product.remove()
        signale.complete(`Product of id ${req.product_id}, succefully Removed!`)
        res.json({message: `Product of id ${req.product_id}, succefully Removed!`});
    } catch (err) {
        signale.fatal("Something went wrong while removing ... ")
        console.log(err)
        res.status(400).json(err);
    }
}

exports.addProduct = async (req, res)=>{
    signale.pending("A user is trying to add a product!")
    try {
        // Check if a request has a token - varify
        const token = req.header('token');
        if (!token) {
            signale.fatal('Access Denied')
            return res.status(401).json('Access Denied');
        }
         // Validate product inputs
         const { error } = addProductValidation(req.body);
         if (error) {
             signale.fatal("Input flagged error during validation")
             return res.status(400).json({error: error.details[0].message});   // The message is form the joi object in validation.js
         }
        // Get owners-ID out of the token from request
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified;
        // Create new Product
        const product = new Product({
            product_name: req.body.product_name,
            category: req.body.category,
            owner_id: verified._id,  // Here is the owners ID
            cost: req.body.cost,
            description: req.body.description  // DESCRIPTION MUST BE DEFINED IN THE REQUEST - AT LEAST ""
        });
        const savedProduct = await product.save();
        signale.complete("Product added!")
        res.json({product: savedProduct, "token":token});
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.myDetails = async (req, res)=>{
    signale.pending('A user requesting his/her list of product')
    const token = req.header('token');
    if (!token) {
        signale.fatal('Access Denied')
        return res.status(401).json('Access Denied');
    }
    
    try {
        //  This makes sure that every api call has a token and varified
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified;
        const mydata = await User.find({ _id: verified._id})
        const productsList = await Product.find({owner_id: verified._id})
        signale.complete(productsList)
        res.json({user: mydata, productsList})
    } catch (error) {
        signale.fatal('Error while resolving token and getting Details.')
        res.status(400).json('Invalid Token')
    }
}

exports.login = async (req, res) => {  
    signale.pending("A user trying to log in!")
    
    // Validate User
    const { error } = loginValidation(req.body);
    if (error) {
        signale.fatal("Login validation failed")
        return res.status(400).json({error: error.details[0].message});
    }
    
    // If existing email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        signale.fatal("Email not found")
        return res.status(400).json({error: 'Email is not found'});
    }
    
    // Password correct?
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        signale.fatal("Invalid password")
        return res.status(400).json({error: 'Invalid password'});
    }
    
    // Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    signale.complete("Login succeded!")
    res.send({'token': token}) // attached token to the header OR WE CAN DO THE REDIRECTING HERE
}