import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
  product_id: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  name:{
    type: String,
    required:true
  },
  image:{
    type:Buffer,
    contentType:String
  },
  content:{
    type: String,
    min: 2,
    max: 32,
    required: true
  }
});

export default model('Image', imageSchema);

/**
 ,
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
 */