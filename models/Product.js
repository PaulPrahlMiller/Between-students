const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  product_name: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  catagory:{
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  owner_id: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expriration_date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    min: 6,
    max: 255,
    required: true
  }
});

module.exports = model('Product', productSchema);