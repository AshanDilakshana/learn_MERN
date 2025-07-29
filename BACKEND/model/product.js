import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product:{
        type:String,
        require:true,
        unique:true

    },
    productName: {
      type: String,
      required: true,
    },

    altanativeNames:{
        tyep : [String],
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

    productquantity: {
      type: Number,
      required: true,
      default: 1,
    },

    productImage: {
      type: [String],
      default:[],
      required: true,
      default: 'https://example.com/default-product-image.jpg',
    },

}
)
const product = mongoose.model('Product', productSchema);
export default product;
