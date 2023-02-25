import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ( { item } ) => {
    return (
        <div className="product-cart">
            <div className="cart-info">
                <h1 className="cart-price">{item.price}</h1>
                <button className="cart-buttons">Add to cart</button>
                <Link to={'/Shop'}><button className="cart-buttons">Go Back</button></Link>
            </div>
        </div>
    )
}

export default ProductCart;