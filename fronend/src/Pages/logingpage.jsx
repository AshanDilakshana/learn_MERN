import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';



export default function LoginPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); //smooth navigetion

    async function handleLogin() {
        try{
        const response =  await axios.post(import.meta.env.VITE_API_URL+"/api/users/login",
             {email,password}
           );
           
             const user = response.data.user;
             toast.success("Login successful!");
                if (user.role == "admin") {
                    navigate("/admin");
                }else if (user.role == "user") {
                    navigate("/Home");
                } 
                } catch(e){
                    console.error("Login failed", e);
                   // alert("Login failed, please check your credentials.");
                   toast.error("Login failed, please check your credentials.");}
    }
    return (
        <div className="w-full h-[100vh] bg-[url('/bg.jpg')] bg-cover bg-center flex">
            <div className="w-[50px] h-full ">

            </div>
            <div className="w-[calc(100%-50px)] h-full flex items-center justify-center">
                <div className="w-[400px] h-[400px] backdrop-blur-lg rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <input onChange={(e)=>{
                         setEmail(e.target.value) }} 

                         type="text" placeholder="Username" className="mb-4 p-2 border border-primery rounded w-full" />
                    <input onChange={(e)=>{
                         setPassword(e.target.value) }}
                         type="password" placeholder="Password" className="mb-4 p-2 border border-primery rounded w-full" />

                    <button onClick={handleLogin} className="bg-acensed text-white px-4 py-2 rounded">Login</button>
                </div>
            </div>
            





            </div>
    )


}