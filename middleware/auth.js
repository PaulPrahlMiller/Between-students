const jwt = require('jsonwebtoken');
require('dotenv').config();

const authUser = function (req, res, next) {
  // Get token from Authorization header. Structure of header 'Bearer <token>'
  let token = req.header('Authorization');
  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Not Authorized' });
  }
  try {
    token = token.split(' ')[1];
    // Verify the token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    // Add user object to the request
    req.user = decoded.user;
    // Pass onto next handler
    next();
  } catch (error) {
    // Handle errors
    console.log(error);
  }
};

module.exports = authUser;
