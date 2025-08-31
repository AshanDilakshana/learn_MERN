import { Link } from "react-router-dom";


export default function Header() {

return(
    <header className="w-full h-[60px] bg-secondary text-white px[40px] ">
        <div className="w-full h-full flex">
            <img src="/logo1.png" alt="Logo" className="h-full w-[100px] object-cover" />
        
            <div className="w-full bg-amber-700 justify-center items-center text-lg">
              <Link to="/" >home</Link>
              <Link to="/contact" className="ml-4">contact</Link>
              <Link to="/products" className="ml-4">Products</Link>
              <Link to="/about" className="ml-4">about</Link>
            </div>
       </div>
    </header>
)





}