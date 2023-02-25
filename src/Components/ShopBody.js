import React from "react";
import Items from "./Items";
import Data from "./Data";

const ShopBody = () => {
    
    return (
        <div className="shop-body">
            <div className="left-shop">
                <p>Shop/</p>
                <h2>Graphics</h2>
                <h2>Cards</h2>
            </div>
            <div className="right-shop">
                <div className="right-shop-row">
                    <Items data={"rtx3090"} rtx={Data.rtx3090.image} model={Data.rtx3090.model} price={Data.rtx3090.price}/>
                    <Items data={"rtx3090ti"} rtx={Data.rtx3090ti.image} model={Data.rtx3090ti.model} price={Data.rtx3090ti.price}/>
                </div>
                <div className="right-shop-row">
                    <Items data={"rtx3080"} rtx={Data.rtx3080.image} model={Data.rtx3080.model} price={Data.rtx3080.price}/>
                    <Items data={"rtx3080ti"} rtx={Data.rtx3080ti.image} model={Data.rtx3080ti.model} price={Data.rtx3080ti.price}/>
                </div>
                <div className="right-shop-row">
                    <Items data={"rtx3070ti"} rtx={Data.rtx3070ti.image} model={Data.rtx3070ti.model} price={Data.rtx3070ti.price}/>
                </div>
                
                
            </div>
        </div>
    )
}

export default ShopBody;