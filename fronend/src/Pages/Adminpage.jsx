import { Routes, Route, Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize} from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

import AdminproductsPage from './admin/AdminproductsPage.jsx';
import AdminAddNewProduct from './admin/adminAddNewProduct.jsx';
import AdminUpdateProduct from './admin/AdminUpdateProduct.jsx';

export default function Adminpage() {

    return(
        <div className="w-full h-full bg-white flex p-2">
            <div className="w-[300px] h-full bg-secondary flex flex-col items-center rounded-2xl">
                <div className='flex flex-row w-[90%] h-[100px] bg-amber-700 rounded-2xl'>
                    <img src="logo1.png" 
                     alt="Logo" 
                     className=' h-[70px] ' />
                    <h1 className='text-white text-2xl font-bold m-auto'>Admin Dashboard</h1>

                </div>
                <Link to="/admin" className='w-[90%] h-[50px] flex items-center gap-2 text-white hover:bg-red-700 transition-all duration-300 px-4'>
                    <AiFillDashboard/>Dashboard
                </Link>

                <Link to="/admin/products" className='w-[90%] h-[50px] flex items-center gap-2 text-white hover:bg-red-700 transition-all duration-300 px-4'>
                    <MdOutlineDashboardCustomize/>products
                </Link>

                <Link to="/admin/orders" className='w-[90%] h-[50px] flex items-center gap-2 text-white hover:bg-red-700 transition-all duration-300 px-4'>
                    <CiShoppingCart />orders
                </Link>

               <Link to="/admin/users" className='w-[90%] h-[50px] flex items-center gap-2 text-white hover:bg-red-700 transition-all duration-300 px-4'>
                    <FaRegUser />User
                </Link>

            </div>
            
            <div className='w-[calc(100%-300px)] h-full border-[2px] rounded-2xl bg-background overflow-hidden flex items-center '>
                <div className=' h-full w-full max-w-full max-h-full overflow-y-scroll'>

               
             <Routes parth="/">
                <Route path='/' element={<h1>dashboard</h1>} />
                <Route path='/products' element={<AdminproductsPage/>} />
                <Route path='/orders' element={<h1>Orders</h1>} />
                <Route path='/users' element={<h1>Users</h1>} />
                <Route path='/add-product' element={<AdminAddNewProduct/>} />
                <Route path='/update-product' element={<AdminUpdateProduct/>} />
                <Route path='/*' element={<h1>NOT FOUND 404</h1>} />
             </Routes>
            </div>
             </div>
        </div>
    )
}
