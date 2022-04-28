const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  product_name: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  category:{
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
  cost: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  description: {
    type: String,
    min: 6,
    max: 255
  },
  date_upload: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Product', productSchema);

/**
 ,
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
 */