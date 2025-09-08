import { Route, Routes } from "react-router-dom";
import Header from "../components/Headder";
import { ProductPage } from "./productPage";
import  OverView  from "./admin/productOverView";

export default function HomePage() {
	return (
		<div className="w-full h-full bg-primary">
			<Header />
			<Routes path="/">
				<Route path="/" element={<h1>Welcome to the Home Page</h1>} />
				<Route path="/products" element={<ProductPage/>} />
				<Route path="/contact" element={<h1>Contact Us</h1>} />
				<Route path="/about" element={<h1>About Us</h1>} />
				<Route path="/OverView/:id" element={<OverView/>} />

				<Route path="/*" element={<h1>404 Not Found</h1>} />
			</Routes>
		</div>
	);
}