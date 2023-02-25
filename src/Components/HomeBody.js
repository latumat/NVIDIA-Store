import React from "react";
import { Link } from "react-router-dom";

const HomeBody = () => {
    return (
        <div className="home-body">
            <h1>GeForce RTX 3090 Family</h1>
            <p>The GeForce RTX™ 3090 Ti and 3090 are now available to preorder.</p>
            <Link to={'/Shop'}><button className="shop-now">SHOP NOW</button></Link>
        
        </div>
    )
}

export default HomeBody;