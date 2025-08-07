export default function ProductCard(props) { //funtion name must be capitalized

    return(
        <div>
            <h1>Product Card</h1>
             <h4>price = {props.price}</h4>
            <h4>name = {props.name}</h4>
            <img src={props.image} alt="Product Image" />
            <hr></hr>
        </div>
    )
}