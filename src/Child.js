import React, { useEffect } from "react";
import "./Child.css";
import ReactGA from "react-ga4";

const Child = () => {
    useEffect(()=>{
        ReactGA.send({hitType:"pageview",page:window.location.pathname,title:"Main_pagee"},(err)=>{
            if(err){
                alert("error")
                console.log(err)
            }else{
                console.log(" pageview tracked!!")
            }
        })
        
    },[])

    const addToWishList=(name)=>{
        console.log("tracked start!!",name)
        ReactGA.event({ category: "Button", action: "wishlistaction", label: "wishListClicked" },(err)=>{
            if(err){
                alert("error")
                console.log(err)
            }else{
                console.log("tracked!!")
            }
        })
    }
    const addToCart=()=>{
        window.gtag("event", "addToCart", {
            item1:"item1",
             item2:"item2",
              item3:"item3",
            });
    }

  return (
    <div>
      <h1>Title</h1>
      <div id="contain">
        <button onClick={addToCart}>Add to cart</button>
        <button onClick={()=>addToWishList("wishlistButtonClicked")}>Add to wishlist</button>
        <button onClick={()=>alert("contact us")}>contact us</button>
        <button onClick={()=>alert("know more")}>know more</button>
      </div>
    </div>
  );
};

export default Child;
