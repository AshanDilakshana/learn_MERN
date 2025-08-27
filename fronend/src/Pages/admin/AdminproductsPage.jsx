import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function AdminproductsPage() {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(import.meta.env.VITE_API_URL + "/api/products")
        .then((Response) => {
          console.log(Response.data);
          setproducts(Response.data);
        });
    } catch (error) {
      console.log("error to get products", error);
    }
  }, []);

  return (
    <div className="w-full min-h-full p-3 sm:p-4 md:p-5 bg-white rounded-lg shadow-sm font-inter fade-in">
      <Link
        to="/admin/add-product"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-acensed text-white rounded-full shadow-md hover:bg-acensed-light hover:scale-105 transition-all duration-200"
        aria-label="Add New Product"
      >
        <FaPlus size={16} className="sm:h-5" />
      </Link>
      <div className="overflow-x-auto scrollbar-custom">
        <table className="w-full text-xs sm:text-sm text-text-primary border border-neutral rounded-lg">
          <thead className="bg-acensed/10">
            <tr>
              <th className="p-2 sm:p-3 font-semibold text-left">Image</th>
              <th className="p-2 sm:p-3 font-semibold text-left">Product ID</th>
              <th className="p-2 sm:p-3 font-semibold text-left">Product Name</th>
              <th className="p-2 sm:p-3 font-semibold text-left">Price</th>
              <th className="p-2 sm:p-3 font-semibold text-left">Labeled Price</th>
              <th className="p-2 sm:p-3 font-semibold text-left">Category</th>
              <th className="p-2 sm:p-3 font-semibold text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr
                key={index}
                className="border-b border-neutral hover:bg-neutral/50 transition-all duration-200"
              >
                <td className="p-2 sm:p-3">
                  <img
                    src={item.productImage[0]}
                    alt={item.productName}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md"
                  />
                </td>
                <td className="p-2 sm:p-3">{item.productID}</td>
                <td className="p-2 sm:p-3">{item.productName}</td>
                <td className="p-2 sm:p-3">${item.productPrice}</td>
                <td className="p-2 sm:p-3">${item.LabledPrice}</td>
                <td className="p-2 sm:p-3">{item.category}</td>
                <td className="p-2 sm:p-3">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => navigate("/admin/update-product", { state: item })}
                      className="p-1.5 sm:p-2 text-acensed hover:text-accent hover:scale-110 transition-all duration-200"
                      aria-label={`Edit ${item.productName}`}
                    >
                      <FaEdit size={14} className="sm:h-4" />
                    </button>
                    <button
                      className="p-1.5 sm:p-2 text-red-400 hover:text-red-500 hover:scale-110 transition-all duration-200"
                      aria-label={`Delete ${item.productName}`}
                    >
                      <FaRegTrashAlt size={14} className="sm:h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}