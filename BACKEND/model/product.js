import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    
    productPrice: {
      type: Number,
      required: true,
    },

    productDescription: {
      type: String,
      required: true,
    },

    productquantity: {
      type: Number,
      required: true,
      default: 1,
    },

    productImage: {
      type: String,
      required: true,
      default: 'https://example.com/default-product-image.jpg',
    },

}
)
const product = mongoose.model('Product', productSchema);
export default product;
