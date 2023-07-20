import { useEffect, useState, useRef } from "react";
import Nav from "./nav"
import emptycartImage from "./Images/emptycartImage.png"
import "./Styles/cart.scss";
import axios from "axios"
import CartIcon from "./cartIcon";
import uuid from 'react-uuid';

let data = axios.get("https://martysapi.onrender.com/cart")

export default function Cart(){
    const[items,sitems] = useState([])
    const[coun,scoun]=useState([])
    const[empty,sempty]=useState("")
    const[amountItems,samountItems]=useState("")
    const[promiseFullfiled,spromiseFullfiled]=useState(false) 
   const emptyCart = useRef()

    useEffect(()=>{
        console.log(promiseFullfiled)
        data.then(v=>{
            
            if(items.length<1 && promiseFullfiled===true){
            sempty(emptycartImage)
            emptyCart.current.style.display="block"
           }
           else{
            
            emptyCart.current.style.display="none"
           }
       })
       
    },[items,promiseFullfiled])

    useEffect(()=>{
        data = axios.get("https://martysapi.onrender.com/cart")
        data.then(data=>{
            samountItems(data.data.coun)
        })

    },[items])

    useEffect(()=>{
     spromiseFullfiled(true)
      data.then(data=>{
        samountItems(data.data.coun)
        for(let i in data.data.items){
            sitems(items=>[...items,data.data.items[i]])
           scoun(coun=>[...coun,1])
        }
      })
    },[])

    useEffect(()=>{
    if(items.length<1 && coun.length>0){
        data = axios.get("https://martysapi.onrender.com/cart")
        
    }
   },[items,coun])

    useEffect(()=>{
        if(items.length<1 && coun.length>0){
            data.then(data=>{
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
            <CartIcon coun={amountItems}/>
           <img id="emptyCart"alt="" src={empty} ref={emptyCart}/>
           <div id="cartBag">
             
              {items.map((item,itemIndex)=>{
                
                return <div key={uuid()}>
                    <img alt="img" src={item.img}/>
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
                        spromiseFullfiled(false)
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
