import experss from 'experss';
import { createproduct ,getProduct } from '../controllers/productController.js';

const  productRouter = experss.router();


productRouter.get("/",getProduct)
productRouter.post("/",createproduct)




export default productRouter;