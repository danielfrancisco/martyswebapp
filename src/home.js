import React, { useEffect, useState } from "react";
import Nav from "./nav"
import "./Styles/styles.scss";
import CartIcon from "./cartIcon";
import { useSelector, useDispatch } from 'react-redux'
import { setCartCounter } from './slice'

function Home (){
  const[header,shedaer]=useState("Big things are coming!")
  const[coun,scoun]=useState(0)
  const buydata = useSelector(state=>state)
 const dispatch = useDispatch()

     useEffect(()=>{
      let count = 0
      for(let i in buydata.menudata){
       count = count+buydata.menudata[i].amount
      }
       scoun(count)
       },[])

     useEffect(()=>{
      
      dispatch(setCartCounter(coun))
     },[coun])

     return(
        <>
       <Nav/>         
       <CartIcon coun={buydata.cartCounter}/>
       
        <div id="home">
          <ul id="hero">
          <p id="header">{header}</p>
          
          <button onClick={
            ()=>{
              window.location.hash="/tryOne";
            }
          }>
         Check our new menu!
          </button>
          
          </ul>
          <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMj
          A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="burger"></img>
        </div> 
               
               
        </>
        )

}

export default Home