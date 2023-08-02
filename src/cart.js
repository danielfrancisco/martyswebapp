import { useEffect, useState, useRef } from "react";
import Nav from "./nav"
import emptycart from "./Images/emptycart.png"
import "./Styles/cart.scss";
import axios from "axios"
import uuid from 'react-uuid';

export default function Cart(){
    const[items,sitems] = useState([])
    const[coun,scoun]=useState([])
    const[amountItems,samountItems]=useState("")
    const[promiseFullfiled,spromiseFullfiled]=useState(false) 
   const emptyCart = useRef()

    useEffect(()=>{
        
        if(items.length<1 && promiseFullfiled===true){
            emptyCart.current.style.display="block"
           }
           else{
            
            emptyCart.current.style.display="none"
           }
       
       
    },[items,promiseFullfiled])

    useEffect(()=>{
        axios.get("https://martysapi.onrender.com/cart")
        .then(data=>{
            samountItems(data.data.coun)
        })

    },[items])

    useEffect(()=>{
        
        axios.get("https://martysapi.onrender.com/cart")
        .then(data=>{
        samountItems(data.data.coun)
        spromiseFullfiled(true)
        for(let i in data.data.items){
            sitems(items=>[...items,data.data.items[i]])
           scoun(coun=>[...coun,1])
        }
      })
    },[])

    useEffect(()=>{
    if(items.length<1 && coun.length>0){
        
        
    }
   },[items,coun])

    useEffect(()=>{
        if(items.length<1 && coun.length>0){
            axios.get("https://martysapi.onrender.com/cart")
            .then(data=>{
                for(let i in data.data.items){
                    sitems(items=>[...items,data.data.items[i]])
                   scoun(coun=>[...coun,0])
                }
              })
        }

    },[items,coun])

    function incre(combo){
        let amountTem = []
        let itemsTem = []
        let position 
        for(let i in items){
            if(items[i].name===combo.name){
                amountTem.push(items[i])
                amountTem[0].amount=parseInt(amountTem[0].amount)+1
                position = i
                
            }else{
                
                itemsTem.push(items[i])
                
            }
            
        }
        
        itemsTem.splice(position,0,amountTem[0]);
        sitems(itemsTem)
        
        samountItems(amountItems=>{
            return amountItems=amountItems+1
        })
        
        axios.post("https://martysapi.onrender.com/cart",{
            amountTem
        })
    }

    function reduce(combo){
        if(combo.amount>1){
        let amountTem = []
        let itemsTem = []
        let position 
        for(let i in items){
            if(items[i].name===combo.name){
                amountTem.push(items[i])
                amountTem[0].amount=parseInt(amountTem[0].amount)-1
                position = i
                
            }else{
                
                itemsTem.push(items[i])
                
            }
            
        }
        
        itemsTem.splice(position,0,amountTem[0]);
        sitems(itemsTem)
        
        samountItems(amountItems=>{
            return amountItems=amountItems-1
        })
        
        axios.post("https://martysapi.onrender.com/cart",{
            amountTem
        })
        }
    }
    
     
    
   return(
        <>
            <Nav/>
            
           <img id="emptyCart" alt="  " src={emptycart} ref={emptyCart}/>
           <div id="cartBag">
             
              {items.map((item,itemIndex)=>{
                
                return <div id="itemsBag" key={uuid()}>
                    <img alt="img" id="itemImg" src={item.img}/>
                    <p>{item.name}</p>
                    <p>{item.amount}</p>
                    <button id="removeOne" onClick={()=>{
                       reduce(item)
                    }}>-</button>
                    <button id="addOne" onClick={()=>{
                       incre(item)
                    }}>+</button>
                    <button id="remove" onClick={()=>{
                        
                        sitems([])
                        
                        if(items.length>1){
                            
                            spromiseFullfiled(false)
                            
                        }else{
                            spromiseFullfiled(true)
                        }
                        
                        axios.post("https://martysapi.onrender.com/cart",{
                            item
                        })
                    }}>remove</button>
                </div>
              })}
           </div>
        </>
    )
}
