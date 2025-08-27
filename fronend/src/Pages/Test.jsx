import { useState } from "react";

export default function Test() {
    //let count = 10;
 const [count,setcount] = useState(10);
 const [status,setstatus] = useState("online");
 
    return(

    <div className="w-full h-full flex juestify-center items-center ">
        <div className="w-[500px] h-[500px] bg-amber-200">
            <button onClick={
                ()=>{
                    setcount(count + 1);
                    console.log(count);
                }
            }className="w-[100px] h-[50px] bg-white m-auto mt-[75px] rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 ">Click + </button>
            <span className="text-5xl text-white font-bold"> {count} </span>
            <button onClick={
                ()=>{
                    setcount(count - 1)
                    console.log(count);
                }
            }
            className="w-[100px] h-[50px] bg-white m-auto mt-[20px] rounded-lg hover:bg-red-300 hover:text-white transition-all duration-300">Click - </button>
        
        <div className="w-full h-[200px] mt-[50px] juestify-center items-center flex flex-col">
            <span className="text-4xl">{status}</span>
            <div className="flex gap-5">
                    <button onClick={
                        ()=>{
                            setstatus("online")
                        }
                    }
                    className="w-[80px] h-[50px] bg-white m-auto mt-[20px] rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">online</button>
                    <button onClick={
                        ()=>{
                            setstatus("offline")
                            }
                    }
                    className="w-[80px] h-[50px] bg-white m-auto mt-[20px] rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">offline</button>
                    <button onClick={
                        ()=>{
                            setstatus("deactive")
                        }
                    }
                    className="w-[80px] h-[50px] bg-white m-auto mt-[20px] rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">deactive</button>
        </div></div>
     </div>
    </div>

    )
    
}