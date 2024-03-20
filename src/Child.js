import React, { useEffect } from "react";
import "./Child.css";
import ReactGA from "react-ga4";

const Child = () => {
    useEffect(()=>{
        ReactGA.send({hitType:"pageview",page:window.location.pathname,title:"HomePage"})
    },[])

    const addToWishList=(name)=>{
        alert("Wishlist tracked!!! ")
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
