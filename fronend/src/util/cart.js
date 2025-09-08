
export function loadcart(){
    let cartString = localStorage.getItem("cart"); //[item1,item,2]

    if(cartString === null){
        localStorage.setItem("cart","[]");
        cartString = "[]";
    }
    const cart = JSON.parse(cartString);
    return cart;
    
}

export function addTocart(product,quntit){
    const cart = loadcart();

    const exsistingitemIndex = cart.findindex(
        (item) => item.productID === product.productID
    );
}