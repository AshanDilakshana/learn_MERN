import producct from "../model/product.js";


export async function createproduct(req, res){

    if(!IsAddmin(req))
        res.status(403).json({
            message: "user not found please logging or use admin loging"
        });
        return;

    try{
        const productData = req.body;

        const product = new product(productData) // create new product
        await product.save();  

        res.json({
            message: "product created sucessfully "
        })

    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "product creation faild "

        });
          
        
    }

    
}

export async function getProduct(req, res){

    try{
        const product = await product.find();
    res.json(producct);

    }catch(err){
        res.status(400),json({
            message:"product getting fail"
        })
        console.error(err)
    }
    






}