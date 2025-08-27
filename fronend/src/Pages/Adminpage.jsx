import { Routes, Route, NavLink } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import AdminproductsPage from './admin/AdminproductsPage.jsx';
import AdminAddNewProduct from './admin/adminAddNewProduct.jsx';
import AdminUpdateProduct from './admin/AdminUpdateProduct.jsx';

export default function Adminpage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-background font-inter flex">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-50 w-56 sm:w-60 md:w-64 bg-acensed/95 backdrop-blur-sm transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 flex flex-col rounded-r-lg md:rounded-lg`}
      >
        <div className="flex items-center justify-center h-12 sm:h-14 bg-acensed rounded-t-lg">
          <img src="logo1.png" alt="Logo" className="h-8 sm:h-9 rounded-full shadow-sm" />
          <h1 className="text-white text-base sm:text-lg font-semibold ml-2">Admin Dashboard</h1>
        </div>
        <nav className="flex-1 flex flex-col gap-1 p-2 sm:p-3">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 text-white text-xs sm:text-sm font-medium rounded hover:bg-acensed-light hover:scale-105 transition-all duration-200 ${
                isActive ? 'bg-acensed border-l-4 border-acensed-light' : ''
              }`
            }
            aria-label="Navigate to Dashboard"
          >
            <AiFillDashboard size={16} className="sm:h-4" /> Dashboard
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 text-white text-xs sm:text-sm font-medium rounded hover:bg-acensed-light hover:scale-105 transition-all duration-200 ${
                isActive ? 'bg-acensed border-l-4 border-acensed-light' : ''
              }`
            }
            aria-label="Navigate to Products"
          >
            <MdOutlineDashboardCustomize size={16} className="sm:h-4" /> Products
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 text-white text-xs sm:text-sm font-medium rounded hover:bg-acensed-light hover:scale-105 transition-all duration-200 ${
                isActive ? 'bg-acensed border-l-4 border-acensed-light' : ''
              }`
            }
            aria-label="Navigate to Orders"
          >
            <CiShoppingCart size={16} className="sm:h-4" /> Orders
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-3 text-white text-xs sm:text-sm font-medium rounded hover:bg-acensed-light hover:scale-105 transition-all duration-200 ${
                isActive ? 'bg-acensed border-l-4 border-acensed-light' : ''
              }`
            }
            aria-label="Navigate to Users"
          >
            <FaRegUser size={16} className="sm:h-4" /> Users
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full p-3 sm:p-4 md:p-5 bg-background">
        <button
          className="md:hidden fixed top-2 sm:top-3 left-2 sm:left-3 z-50 text-acensed"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          <HiMenuAlt3 size={20} className="sm:h-6" />
        </button>
        <div className="h-full w-full bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-5 overflow-y-auto scrollbar-custom fade-in">
          <Routes>
            <Route
              path="/"
              element={
                <div className="p-3 sm:p-4">
                  <h1 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 sm:mb-4">Dashboard</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 bg-neutral rounded shadow-sm">
                      <h2 className="text-xs sm:text-sm font-medium text-text-primary">Total Products</h2>
                      <p className="text-base sm:text-lg font-bold text-acensed">1,234</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-neutral rounded shadow-sm">
                      <h2 className="text-xs sm:text-sm font-medium text-text-primary">Total Orders</h2>
                      <p className="text-base sm:text-lg font-bold text-acensed">567</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-neutral rounded shadow-sm">
                      <h2 className="text-xs sm:text-sm font-medium text-text-primary">Total Users</h2>
                      <p className="text-base sm:text-lg font-bold text-acensed">789</p>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/products" element={<AdminproductsPage />} />
            <Route path="/orders" element={<h1 className="text-lg sm:text-xl font-semibold text-text-primary p-3 sm:p-4">Orders</h1>} />
            <Route path="/users" element={<h1 className="text-lg sm:text-xl font-semibold text-text-primary p-3 sm:p-4">Users</h1>} />
            <Route path="/add-product" element={<AdminAddNewProduct />} />
            <Route path="/update-product" element={<AdminUpdateProduct />} />
            <Route
              path="/*"
              element={
                <div className="flex flex-col items-center justify-center h-full fade-in">
                  <h1 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">404 - Page Not Found</h1>
                  <NavLink
                    to="/admin"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-acensed text-white rounded hover:bg-acensed-light transition-all duration-200 text-xs sm:text-sm"
                  >
                    Back to Dashboard
                  </NavLink>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}