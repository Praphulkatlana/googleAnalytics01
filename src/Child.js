import React from "react";
import "./Child.css";

const Child = () => {
  return (
    <div>
      <h1>Title</h1>
      <div id="contain">
        <button onClick={()=>alert("Add to cart")}>Add to cart</button>
        <button onClick={()=>alert("Add to wishlist")}>Add to wishlist</button>
        <button onClick={()=>alert("contact us")}>contact us</button>
        <button onClick={()=>alert("know more")}>know more</button>
      </div>
    </div>
  );
};

export default Child;
