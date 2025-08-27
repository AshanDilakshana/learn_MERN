import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import mediaUplode from "../../util/mediaUplode.jsx";

export default function AdminAddNewProduct() {

    const[productID,setproductID] = useState("");
    const [productName,setProductName] = useState("");
    const [price, setprice] = useState("");
    const [labledPrice, setlabledPrice] = useState(0);
    const [description, setdescription] = useState("");
    const [altName, setaltName] = useState("");
    const [category, setcategory] = useState("creem");
    const [image, setimage] = useState([]);
    const[stock,setstock] = useState(0);
    const navigate = useNavigate (); // to navigate to another page
    
async function addproduct(){
    const token = localStorage.getItem("token");
    
    if(token == null){
        navigate("/login");
        return
    }

    const uploadPromises  = []
        for(let i=0;i<image.length;i++){
        uploadPromises [i] = mediaUplode(image[i]); //promise array (uplode karana image wala lik tika) 
            }
            try{
              const urls = await Promise.all(uploadPromises); // all image link eka ganna 
              console.log(urls);
              const Alternative = altName.split(",") // alt name eka array akata convert karanawa
                const product = { //SEND BACKEND DATA json object 
                    productID:productID,
                    productName:productName,
                    productPrice:price,
                    LabledPrice:labledPrice,
                    productDescription:description,
                    category:category,
                    stock:stock,
                    altanativeNames:Alternative,
                    productImage:urls
                }
                await axios.post(import.meta.env.VITE_API_URL+"/api/products/createProduct",product,{
                    headers:{Authorization:"Bearer " +token}
                })
                toast.success("product added successfully");
                navigate("/admin/products");
            }
            catch(error){
                console.log("error to add product",error);
                toast.error("error to add product");
            }
}
 

return (
  <div className="w-full h-screen flex justify-center items-center ">
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Add New Product
      </h2>
      <p className="text-sm text-gray-500 text-center mb-4">
        Fill in the details below to create your product
      </p>

      {/* Product ID */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Product ID</label>
        <input
          value={productID}
          onChange={(e) => setproductID(e.target.value)}
          type="text"
          placeholder="Enter product ID"
          className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
        />
      </div>

      {/* Product Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Product Name</label>
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Enter product name"
          className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
        />
      </div>

      {/* Price + Labeled Price */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Price</label>
          <input
            value={price}
            onChange={(e) => setprice(e.target.value)}
            type="number"
            placeholder="Price"
            className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Labeled Price</label>
          <input
            value={labledPrice}
            onChange={(e) => setlabledPrice(e.target.value)}
            type="number"
            placeholder="Labeled Price"
            className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      {/* Alternative Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Alternative Name</label>
        <input
          value={altName}
          onChange={(e) => setaltName(e.target.value)}
          type="text"
          placeholder="Alternative name"
          className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
        />
      </div>

      {/* Stock */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Stock</label>
        <input
          value={stock}
          onChange={(e) => setstock(e.target.value)}
          type="number"
          placeholder="Stock quantity"
          className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
        />
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
        >
          <option value="creem">Cream</option>
          <option value="oil">Oil</option>
          <option value="shampoo">Shampoo</option>
          <option value="bodywash">Bodywash</option>
          <option value="facewash">Facewash</option>
          <option value="serum">Serum</option>
        </select>
      </div>

      {/* File Upload */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Product Images</label>
        <input
          type="file"
          onChange={(e) => setimage(e.target.files)}
          multiple
          className="m-1 p-2 rounded-md border bg-gray-50 cursor-pointer"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter product description..."
          className="m-1 p-2 rounded-md border focus:ring-2 focus:ring-amber-500 outline-none"
        />
      </div>

      <div className="flex item-center  gap-4 mt-4">
        <button onClick={addproduct }  className=" w-[100px] bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300">
            Save
        </button>

        <button onClick={()=>{
            navigate("/admin/products");}}
            className=" w-[100px] bg-red-400 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300">
            Cancel
        </button>
      </div>
    </div>
  </div>
);
}

  