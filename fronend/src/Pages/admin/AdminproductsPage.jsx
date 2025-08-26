import axios from 'axios';
import {useEffect, useState} from 'react';
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const sampleData=[
  {
    "product": "COS001",
    "productID": "C1001",
    "productName": "L'Oréal Revitalift Day Cream",
    "altanativeNames": ["L'Oréal Cream", "Revitalift", "Anti-Aging Cream"],
    "productPrice": 4500,
    "LabledPrice": 5200,
    "productDescription": "Anti-aging day cream with SPF 30 to reduce wrinkles and firm skin.",
    "productquantity": 50,
    "productImage": ["https://example.com/images/loreal-revitalift.jpg"]
  },
  {
    "product": "COS002",
    "productID": "C1002",
    "productName": "Maybelline Fit Me Foundation",
    "altanativeNames": ["Fit Me", "Maybelline Foundation", "Matte Foundation"],
    "productPrice": 3200,
    "LabledPrice": 3500,
    "productDescription": "Matte + Poreless liquid foundation suitable for normal to oily skin.",
    "productquantity": 80,
    "productImage": ["https://example.com/images/maybelline-fitme.jpg"]
  },
  {
    "product": "COS003",
    "productID": "C1003",
    "productName": "MAC Matte Lipstick – Ruby Woo",
    "altanativeNames": ["MAC Lipstick", "Ruby Woo", "Red Lipstick"],
    "productPrice": 5500,
    "LabledPrice": 6000,
    "productDescription": "Classic retro matte lipstick in iconic Ruby Woo shade.",
    "productquantity": 100,
    "productImage": ["https://example.com/images/mac-rubywoo.jpg"]
  },
  {
    "product": "COS004",
    "productID": "C1004",
    "productName": "Neutrogena Hydro Boost Water Gel",
    "altanativeNames": ["Neutrogena Gel", "Hydro Boost", "Moisturizer"],
    "productPrice": 4200,
    "LabledPrice": 4700,
    "productDescription": "Lightweight water gel moisturizer with hyaluronic acid for 24h hydration.",
    "productquantity": 70,
    "productImage": ["https://example.com/images/neutrogena-hydroboost.jpg"]
  },
  {
    "product": "COS005",
    "productID": "C1005",
    "productName": "The Body Shop Tea Tree Oil",
    "altanativeNames": ["Tea Tree Oil", "Body Shop Oil", "Skin Treatment Oil"],
    "productPrice": 3800,
    "LabledPrice": 4200,
    "productDescription": "Natural tea tree oil for blemished skin, helps reduce acne.",
    "productquantity": 40,
    "productImage": ["https://example.com/images/bodyshop-teatree.jpg"]
  }
];


export  default function AdminproductsPage() {

const [products,setproducts] = useState([]) 

useEffect(()=>{ 

   try{
     axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
         (Response)=>{
             console.log(Response.data);
             setproducts(Response.data)
         }
     )
    }catch(error){
        Message.error("error to get products")
        console.log("error to get products",error);
    }
 }, [])

    return(
        <div className="w-full min-h-full ">
            <Link to = "/addmin/add-product" className='fixed right-[65px]  bottom-[50px] text-5xl hover:text-blue-500'>
            <FaPlus/>
            </Link>
            <table className='border w-full text-center'>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>labled price</th>
                        <th>category</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
             { products.map(
                    (item,index)=>{
                      return(
                       <tr key ={index}>
                            <td> <img src="logo.png" className='w-16 h-16 '></img></td>
                            <td> {item.productID}</td>
                            <td>{item.productName}</td>
                            <td>{item.productPrice}</td>
                            <td>{item.LabledPrice}</td>
                            <td>no</td>
                            <td>
                                <div className='flex gap-2 justify-center items-center'>
                                    <FaRegTrashAlt className='hover:text-red-500'/>
                                    <FaEdit className='hover:text-green-400'/>
                                </div>
                            </td>
                       </tr>
                      )
                    }
                )
            }

                </tbody>
            </table>





        
        </div>
    )
}