import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    unique: true, 
    required: true,
  },

  productName: {
    type: String,
    required: true,
     
  },

  altanativeNames: {
    type: [String],
    default: [],
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
    default: [],
    required: true,
    default: ["https://picsum.photos/200/200?random=3"],
  },
});
const product = mongoose.model("Product", productSchema);

export default product;
