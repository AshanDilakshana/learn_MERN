import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/api/users/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      const user = response.data.user;
      toast.success("Login successful!");
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "user") {
        navigate("/Home");
      }
    } catch (e) {
      console.error("Login failed", e);
      toast.error("Login failed, please check your credentials.");
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center font-inter">
      <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-lg rounded-lg shadow-sm p-6 sm:p-8 flex flex-col gap-4 fade-in">
        <h1 className="text-xl sm:text-2xl font-semibold text-black text-center">
          Welcome Back
        </h1>
        <p className="text-xs sm:text-sm text-black/80 text-center mb-2">
          Log in to manage your store
        </p>

        {/* Email Input */}
        <div className="flex flex-col">
          <label className="text-xs sm:text-sm font-medium text-black mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2.5 rounded-md bg-white/20 border border-neutral text-black placeholder-black/50 focus:ring-2 focus:ring-accent outline-none text-xs sm:text-sm"
            aria-label="Email"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label className="text-xs sm:text-sm font-medium text-black mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="p-2.5 rounded-md bg-white/20 border border-neutral text-black placeholder-black/50 focus:ring-2 focus:ring-accent outline-none text-xs sm:text-sm"
            aria-label="Password"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-acensed text-white rounded-md hover:bg-acensed-light hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium"
          aria-label="Log In"
        >
          Log In
        </button>

        {/* Forgot Password Link */}
        <a
          href="#"
          className="text-xs sm:text-sm text-acensed hover:text-red text-center transition-colors duration-200"
          aria-label="Forgot Password"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
}