import { useState } from "react";
import mediaUplode from "../util/mediaUplode.jsx";

 

export default function Test() {

 const [file,setfile] = useState(null);


 async function uploadimage(){
    const link = await mediaUplode(file)
    console.log(link);
 };


    return(

    <div className="w-full h-full flex juestify-center items-center ">
        <input type="file"onChange={
            (e)=>{
                setfile(e.target.files[0]);
            }
        }></input>
        <button className="p-2 bg-blue-500 text-white rounded-md"
        onClick={uploadimage}>upload</button>
    </div>

    )
    
}