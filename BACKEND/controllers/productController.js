import product from "../model/product.js";
import Product from "../model/product.js";
import { IsAddmin } from "./userController.js"; 

//create
export async function createproduct(req, res){
    if(!IsAddmin(req))
        return res.status(403).json({
            message: "user not found please logging or use admin loging"
        });
     try{
            const productData = req.body;

            const product = new Product(productData) // create new product
            await product.save();  

            res.json({
                message: "product created sucessfully "
            })
       }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: "product creation faild "

        });        
    }
}

  //get
export async function getProduct(req, res){
    try{
        const product = await Product.find();
    res.json(product);

    }catch(err){
        res.status(400),json({
            message:"product getting fail"
        })
        console.error(err)
    }
}

  /////delete

export  async function deleteProduct(req, res){

    if (!IsAddmin(req)){
        res.json({
            message: "user not found please logging or use admin loging"  }  )
    return;
    }
   
    try{
        const productId = req.params.productId;  //(param) kiyanne url ekenma id ekk yawana awann

        if(productId==null){
            return res.status(400).json({
                message: "productId is required"
            });
        }
        
        await Product.deleteOne({ productID: productId });
            res.json({
                message: "product deleted successfully"
            }); 
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: "product deletion failed"
        });
        return;
    }
}
///update
export async function updateProduct(req,res){
    

    try{
        const productID = req.params.productID;
        const updateData =  req.body;

        await product.updateOne({
            productID: productID
        }, updateData);
        
            res.json({
                message: "product updated successfully"
            });
            console.log("product updated successfully", productID, updateData);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: "product update failed"
        });
        return;
    }
}

//get by id 
export async function getProductById(req, res) {
    try{
        const productId = req.params.productID;

        const Product = await product.findOne({ productID: productId });   
            
        if(Product == null){
            return res.status(404).json({
                message: "product not found"
            });
        }else
            res.json(Product);

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: "product retrieval failed"
        });
        return;
    }

}