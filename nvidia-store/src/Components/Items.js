import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Items = ( {data, rtx, model, price} ) => {

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    return (
        <div className="card">
            <Link style={linkStyle} to={`./Product/${data}`}>
            <div className="images">
                <img src={rtx}></img>
            </div>
            <div>
                <h3>{model}</h3>
                <p>{price}</p>
            </div>
            </Link>
        </div>
    )
}

export default Items;