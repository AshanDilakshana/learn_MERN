export default function ProductCard(props) { //funtion name must be capitalized

    return(
        <div>
            <h1 className="text-4xl ">Product Card</h1>
             <h4 className="text-2xl ">price = {props.price}</h4>
            <h4 className="text-2xl ">name = {props.name}</h4>
            
            <img src={props.image} alt="Product Image" />
            <hr></hr>
        </div>
    )
}