import { Link } from 'react-router-dom';

export default function ProductCard(props) {
	const product = props.product;
	return (
		<div className="w-[280px] sm:w-[300px] h-[420px] bg-white rounded-xl shadow-lg m-3 flex flex-col p-4 hover:shadow-xl transition-shadow duration-300">
			<div className="relative w-full h-[220px] rounded-lg overflow-hidden">
				<img 
					className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
					src={product.productImage[0]} 
					alt={product.productName}
				/>
				<div className="absolute top-2 right-2 bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full">
					{product.category}
				</div>
			</div>
			<div className="flex-1 flex flex-col justify-between pt-3">
				<div>
					<h1 className="text-lg sm:text-xl font-semibold text-secondary line-clamp-2">{product.productName}</h1>
					<p className="text-xs text-neutral mt-1">{product.productID}</p>
					<div className="flex gap-3 items-center mt-2">
						{product.LabledPrice > product.productPrice ? (
							<>
								<p className="text-base text-neutral font-medium line-through">LKR {product.LabledPrice}</p>
								<p className="text-base text-accent font-semibold">LKR {product.productPrice}</p>
							</>
						) : (
							<p className="text-base text-accent font-semibold">LKR {product.productPrice}</p>
						)}
					</div>
				</div>
				<Link 
					to={`/OverView/${product.productID}`} 
					className="w-full h-10 mt-3 bg-accent text-white rounded-lg flex items-center justify-center text-sm font-medium hover:bg-acensed-light transition-colors duration-200"
				>
					View Product
				</Link>
			</div>
		</div>
	);
}