import { useState } from "react";

export default function CartIcon(props){
     const[coun,scoun]=useState(0)
     
     return(
        <>
        <div id="cart" 
          onClick={()=>{
            window.location.hash="/cart";
          }}
          >
          <img alt="" src="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1142859120?k=20&m=1142859120&s=170667a&w=0&h=mDJbGHOildt4Ip7TOmNt2IN9icVMyvd0_ByrqYhpAVA="/>
          <p
          onClick={()=>{
            window.location.hash="/cart";
          }}
          >{coun}</p>
          </div>
        </>
    )
}