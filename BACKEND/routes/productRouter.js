import express from 'express';
import { createproduct ,getProduct,deleteProduct,updateProduct,getProductById } from '../controllers/productController.js';

const  productRouter = express.Router();


productRouter.get("/",getProduct);
productRouter.post("/createProduct",createproduct);


productRouter.delete('/:productId', deleteProduct);
productRouter.put('/:productID', updateProduct); 
productRouter.get('/:productID', getProductById); 





export default productRouter;