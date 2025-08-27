import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productID: {
      type: String, 
      required: true,
      unique: true,
    },

    productName: {
      type: String,
      required: true,
    },

    altanativeNames:{
        type: [String],
        default : []
    },

    productPrice: {
      type: Number,
      required: true,
    },
    
    LabledPrice: {
      type: Number,
      required: true,
    },

    productDescription: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
      
      productImage: {
      type: [String],
      default:[],
      required: true,
      default: ['https://example.com/default-product-image.jpg'],
    },

}
)
const product = mongoose.model('Product', productSchema);

export default product;
