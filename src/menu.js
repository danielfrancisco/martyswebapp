import React from "react";
import "./Styles/styles.scss";
import Nav from "./nav";
import { useState,useEffect,} from "react";
import axios from "axios"
import CartIcon from "./cartIcon";
import { useSelector, useDispatch } from 'react-redux'
import { getMenuData, setCartCounter } from './slice'

const data = {
  data:[
    {
     name: 'martys',
     img: 'https://media.istockphoto.com/photos/burger-french-fries-and-cola-picture-id178263194?k=20&m=178263194&s=612x612&w=0&h=k88wlT4fSvk50Wawmjn_Zw9_9rG-O179X3JfdF1BE9Q=',
     price: 7,
     amount: 1,
    },

    {
      name: 'burger',
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?crop=1.00xw:0.748xh;0,0.156xh&resize=980:*',
      price: 5,
      amount: 1,
    },

    {
      name: 'slice',
      img: 'https://media.istockphoto.com/photos/pizza-slice-picture-id176003066?k=20&m=176003066&s=170667a&w=0&h=fsnLG0STMbhSjiYEuURs4zoWpoc0gyEvUb7wbBHH_BQ=',
      price: 3,
      amount: 1,
    },

   

     {
      name:'sundae',
      img: 'https://thumbs.dreamstime.com/b/colourful-ice-cream-sundae-white-background-rainbow-copy-space-178401892.jpg',
      price: 1,
      amount: 1,
     },

     
    
  ]
}

function Menu(){
  const[product,sproduct] = useState([])
  const[coun,scoun]  = useState(0)
  const[buy]  = useState("")
  const[view]  = useState("none")
  
  const buydata = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(()=>{
    
     
      for(let i in buydata.menudata){
        for(let j in product){
          
          if(buydata.menudata[i].name===product[j].name){
            document.getElementById("b"+j).style.display="none"
            document.getElementById(j).style.display="inline"
          }
        }
      }
    
  },[product])

  useEffect(()=>{   
    let count = 0
       for(let i in buydata.menudata){
        count = count+buydata.menudata[i].amount
       }
        scoun(count)
    //axios.get("https://fantastic-bee-lingerie.cyclic.app/menu").then(data=>{
      for(let i in data.data){
        sproduct(product=>[...product,data.data[i]])
      }
      
    //})
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

                    if(buydata.menudata.includes(data)===false){
                      dispatch(getMenuData(data))
                    }

                    /*axios.post("https://fantastic-bee-lingerie.cyclic.app/menu",{
                        data
                    })*/
                  }
                }>Add to cart</button>
                <button id={i} className="viewCartClass" style={{display:view}} onClick={
                  ()=>{window.location.hash="/cart";}
                }>Already in cart</button>
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
                    
                    if(buydata.menudata.includes(data)===false){
                      dispatch(getMenuData(data))
                    }
                    
                    axios.post("https://fantastic-bee-lingerie.cyclic.app/menu",{
                        data
                    })
                    
                    
                  }
                }>Add to cart</button>
                <button id={i} className="viewCartClass" style={{display:view}} onClick={
                  ()=>{window.location.hash="/cart";}
                }>Already in cart</button>
                </div>
              }
              return null
            })}
           </div>
          </>
        )
}    
  
export default Menu









