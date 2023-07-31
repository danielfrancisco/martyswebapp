import React from "react";
import "./Styles/styles.scss";
import Nav from "./nav";
import { useState,useEffect } from "react";
import axios from "axios"
import CartIcon from "./cartIcon";

function Menu(){
  const[product,sproduct] = useState([])
  const[coun,scoun]  = useState(0)
  const[buy]  = useState("")
  const[view]  = useState("none")

  useEffect(()=>{
    axios.get("https://beautiful-cyan-fatigues.cyclic.cloud/cart")
    .then(v=>{
      scoun(v.data.coun)
      for(let i in v.data.items){
        for(let j in product){
          
          if(v.data.items[i].name===product[j].name){
            document.getElementById("b"+j).style.display="none"
            document.getElementById(j).style.display="inline"
          }
        }
      }
    })
  },[product])

  useEffect(()=>{   
    axios.get("https://beautiful-cyan-fatigues.cyclic.cloud/menu")
    .then(data=>{
      
      for(let i in data.data){
        sproduct(product=>[...product,data.data[i]])
      }
      
    })
  },[])

 return(
          <>
          <Nav />
          <CartIcon coun={coun}/>

          <div id="menuItemsLe">
            {product.map((data,i)=>{
              let  Lebuyid = "b"+i
              if((i+1)<=product.length/2){
                return <div key={i}>
                <p id="name">{data.name}</p>
                <img alt="" src={data.img}/>
                <p >${data.price}</p>
                <button id={Lebuyid}  className="buttonBuy" style={{display:buy}} onClick={
                  ()=>{
                    let getBuyLe=document.getElementById(Lebuyid)
                    if(getBuyLe.id==="b"+String(i)){
                      getBuyLe.style.display="none"
                    }

                    let view=document.getElementById(i)
                    if(view.id===String((i))){
                      view.style.display="inline"
                    }
                    
                    scoun(String(parseInt(coun)+1))
                    
                    axios.post("https://beautiful-cyan-fatigues.cyclic.cloud/menu",{
                        data
                    })
                  }
                }>Add to cart</button>
                <button id={i} className="viewCartClass" style={{display:view}} onClick={
                  ()=>{window.location.hash="/cart";}
                }>View in cart</button>
                </div>
              }
              return null
            })}
           </div>

           <div id="menuItemsRi">
            {product.map((data,i)=>{
              let  buyid = "b"+i
              if((i+1)>product.length/2){
                return <div key={i}>
                <p>{data.name}</p>
                <img alt="" src={data.img}/>
                <p>${data.price}</p>
                <button  id={buyid} className="buttonBuy" style={{display:buy}} onClick={
                  ()=>{
                    let getBuy=document.getElementById(buyid)
                    if(getBuy.id==="b"+String(i)){
                      getBuy.style.display="none"
                    }

                    let view=document.getElementById(i)
                    if(view.id===String((i))){
                      view.style.display="inline"
                    }
                    
                    scoun(String(parseInt(coun)+1))
                    axios.post("https://beautiful-cyan-fatigues.cyclic.cloud/menu",{
                        data
                    })
                    
                    
                  }
                }>Add to cart</button>
                <button id={i} className="viewCartClass" style={{display:view}} onClick={
                  ()=>{window.location.hash="/cart";}
                }>View in cart</button>
                </div>
              }
              return null
            })}
           </div>
          </>
        )
}    
  
export default Menu









