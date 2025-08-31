import { useEffect, useState } from "react";
import {Loader} from "../components/Loader";
import axios from "axios";
import ProductCard from "../components/productcard";
import toast from "react-hot-toast";


export function ProductPage() {
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    //page eka 1st time loade wenakot backend ekata req ekak dila data gannawa
    if (isloading) {
      axios
        .get(import.meta.env.VITE_API_URL + "/api/products").then((response) => {
          setproducts(response.data);
          setisloading(false);
         // console.log("Backend response:", response)
          
        })
        .catch((err) => {
          console.log("error fetching data",err);
          setisloading(false);
          toast.error("Error fetching data");
          
          
        });
    }
  }, [isloading]);

  return (
    <div className="w-full h-[calc(100vh-100px)]">
      {isloading ? (
        <Loader /> )
      : 
        <div className="w-full h-full flex flex-row flex-wrap  items-center" > 
         
          {
          products.map((item) => {
            return(
            <ProductCard key = {item.productID} product = {item}/>
            )
            })
          }
          

        </div>
      }
    </div>
  );
}
