const { Schema, model } = require('mongoose');

const imagesSchema = new Schema({
  product_id: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  content:{
    type: String,
    min: 2,
    max: 32,
    required: true
  }
});

module.exports = model('Image', imagesSchema);

/**
 ,
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
 */