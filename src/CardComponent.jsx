import React from "react";
import { findDOMNode } from "react-dom";
function Card(){
    return(
        <>
      <h1 className="text-red-400">Product Card</h1>
      <div>
        <img src="https://i.pinimg.com/564x/93/82/02/93820225bf5c3f847683d37aaca9bdf7.jpg"></img>
        <p>The most trendy jeans right now!</p>
      </div>
    </>
    )
}
export default Card