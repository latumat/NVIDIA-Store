import React from "react";
import rtx3090image from "../Images/nvidia-rtx-3090.png";
import rtx3090tiimage from "../Images/nvidia-rtx-3090ti.png";
import rtx3080image from "../Images/nvidia-rtx-3080.png";
import rtx3080tiimage from "../Images/nvidia-rtx-3080ti.png";
import rtx3070tiimage from "../Images/nvidia-rtx-3070ti.png";


const Data = {
    rtx3090: {
        model: "Nvidia GeForce RTX 3090",
        price: "$1,499.99",
        image: rtx3090image,
    },
    rtx3090ti: {
        model: "Nvidia GeForce RTX 3090 Ti",
        price: "$1,999.99",
        image: rtx3090tiimage,
    },
    rtx3080: {
        model: "Nvidia GeForce RTX 3080",
        price: "$699.99",
        image: rtx3080image,
    },
    rtx3080ti: {
        model: "Nvidia GeForce RTX 3080 Ti",
        price: "$1,199.99",
        image: rtx3080tiimage,
    },
    rtx3070ti: {
        model: "Nvidia GeForce RTX 3070 Ti",
        price: "$599.99",
        image: rtx3070tiimage,
    },
}

export default Data;