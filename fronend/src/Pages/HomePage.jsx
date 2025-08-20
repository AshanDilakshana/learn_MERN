import { Route, Routes } from "react-router-dom";
import Header from "../components/Headder.jsx";

export default function HomePage() {
    return (

        <div className="w-full h-[100vh] bg-red-300">
            <Header/>
            <Routes parth="/">
                <Route path='/' element={<h1>wellcome to the Home Page</h1>} />
                <Route path='/products' element={<h1>Products</h1>} />
                <Route path='/about' element={<h1>AboutUs</h1>} />
                <Route path='/contact' element={<h1>Contact Us</h1>} />
                
            </Routes>

            
        </div>
        
    );
}