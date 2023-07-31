import React, { useEffect, useState } from "react";
import Nav from "./nav"
import "./Styles/styles.scss";
import axios from "axios"
import CartIcon from "./cartIcon";

function Home (){
  const[header,shedaer]=useState("")
  const[coun,scoun]=useState("")
  
  useEffect(()=>{
    
    axios.get("https://beautiful-cyan-fatigues.cyclic.cloud/cart")
   .then(data=>{
     scoun(data.data.coun)
     })
   
  },[])
  
  useEffect(()=>{
    axios.get("https://beautiful-cyan-fatigues.cyclic.cloud/")
      .then(data=>{
        
        shedaer(data.data[0]?.header)
      })
    
    
  },[])

     return(
        <>
       <Nav/>         
       <CartIcon coun={coun}/>
       
        <div id="home">
          <ul id="hero">
          <p id="header">{header}</p>
          
          <button onClick={
            ()=>{
              window.location.hash="/tryOne";
            }
          }>
          Order Now
          </button>
          
          </ul>
          <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMj
          A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="burger"></img>
        </div> 
               
               
        </>
        )

}

export default Home