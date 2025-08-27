import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AdminproductsPage() {
  const [products, setproducts] = useState([]);

  useEffect(() => { //privent allwase backend data feching // useEffect(() => {},[])
    try {
      axios
        .get(import.meta.env.VITE_API_URL + "/api/products")
        .then((Response) => {
          console.log(Response.data);
          setproducts(Response.data);
        });
    } catch (error) {
      Message.error("error to get products");
      console.log("error to get products", error);
    }
  }, []);

  return (
    <div className="w-full min-h-full ">
      <Link
        to="/addmin/add-product"
        className="fixed right-[65px]  bottom-[50px] text-5xl hover:text-blue-500">
        <FaPlus />
      </Link>
      <table className="border w-full text-center">
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
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src="logo.png" className="w-16 h-16 "></img>
                </td>
                <td> {item.productID}</td>
                <td>{item.productName}</td>
                <td>{item.productPrice}</td>
                <td>{item.LabledPrice}</td>
                <td>no</td>
                <td>
                  <div className="flex gap-2 justify-center items-center">
                    <FaRegTrashAlt className="hover:text-red-500" />
                    <FaEdit className="hover:text-green-400" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
