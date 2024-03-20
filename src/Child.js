import React, { useEffect } from "react";
import "./Child.css";
import ReactGA from "react-ga";

const Child = () => {
    React.useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
    },[])

    const addToWishList=(name)=>{
        alert(" wishlist tracked!!! ")
        ReactGA.event({
            category:name,
            action:"test action",
            label:"test label"
        })
    }
  return (
    <div>
      <h1>Title</h1>
      <div id="contain">
        <button onClick={()=>alert("Add to cart")}>Add to cart</button>
        <button onClick={addToWishList}>Add to wishlist</button>
        <button onClick={()=>alert("contact us")}>contact us</button>
        <button onClick={()=>alert("know more")}>know more</button>
      </div>
    </div>
  );
};

export default Child;
