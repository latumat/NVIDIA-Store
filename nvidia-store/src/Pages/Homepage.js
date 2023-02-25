import React, { useState, useEffect} from "react";
import Nav from "../Components/Nav";
import HomeBody from "../Components/HomeBody";

const Homepage = () => {
    return (
        <div className="homepage">
            <Nav/>
            <HomeBody/>
        </div>
    )
}

export default Homepage;