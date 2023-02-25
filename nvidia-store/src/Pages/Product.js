import React, { useState, useEffect } from "react";
import Nav2 from "../Components/Nav2";
import Data from "../Components/Data";
import { useParams } from "react-router-dom";
import ProductCart from "../Components/ProductCart";

const Product = () => {
    const {id} = useParams();
    
    return (
        <div className="product">
            <div className="product-and-cart">
                <div className="product-information">
                    <div className="product-name">
                        <h1>{Data[id].model}</h1>
                    </div>
                    <div className="product-image-container">
                        <img className="product-image" src={Data[id].image}></img>
                    </div>
                </div>
                <ProductCart item={Data[id]}/>
            </div>
        </div>
    )
}

export default Product;