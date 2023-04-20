import React from "react";
import "./Styles/styles.scss";
import Nav from "./nav";
import { useState,useEffect } from "react";
import axios from "axios"
import CartIcon from "./cartIcon";

let data = axios.get("http://localhost:3000/menu")
function Menu(){

  const[product,sproduct] = useState([])
  

useEffect(()=>{   
   data.then(data=>{
    for(let i in data.data){
      sproduct(product=>[...product,data.data[i]])
    }
    
   })
},[])

  return(
          <>
          <Nav/>
          <CartIcon/>

          <div id="menuItemsLe">
            {product.map((data,i)=>{
              
              if((i+1)<=product.length/2){
                return <div key={i}>
                <p id="name">{data.name}</p>
                <img alt="" src={data.img}/>
                <p >${data.price}</p>
                <button onClick={
                  ()=>{
                    axios.post("http://localhost:3000/menu",{
                        data
                    })
                  }
                }>Buy</button>
                </div>
              }
              return null
            })}
           </div>

           <div id="menuItemsRi">
            {product.map((data,i)=>{
              if((i+1)>product.length/2){
                return <div key={i}>
                <p>{data.name}</p>
                <img alt="" src={data.img}/>
                <p>${data.price}</p>
                <button  onClick={
                  ()=>{
                    
                    axios.post("http://localhost:3000/menu",{
                        data
                    })
                  }
                }>Buy</button>
                </div>
              }
              return null
            })}
           </div>
          </>
        )
}    
  

export default Menu






