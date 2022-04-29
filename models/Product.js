const { default: mongoose } = require('mongoose');
const { Schema } = require('mongoose');

const productSchema = new Schema({
  title: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  description: {
    type: String,
    min: 6,
    max: 255,
    required: true
  },
  productImage: { type: String, required: true },
  postDate: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
