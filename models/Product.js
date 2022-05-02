const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: 'Enter a title'
  },
  description: {
    type: String,
    required: 'Enter a description'
  },
  cost: {
    type: Number
  },
  category: {
    type: String,
    required: true
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productImage: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
