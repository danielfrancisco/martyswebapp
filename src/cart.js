import { useEffect, useState } from "react";
import Nav from "./nav"
import "./Styles/cart.scss";
import axios from "axios"
import CartIcon from "./cartIcon";
import uuid from 'react-uuid';

let data = axios.get("http://localhost:3000/cart")

export default function Cart(){
    const[items,sitems] = useState([])
    const[coun,scoun]=useState([])
    const[empty,sempty]=useState("")
    const[amountItems,samountItems]=useState("")

    useEffect(()=>{
       data.then(v=>{
        
        if(items.length<1 && amountItems<2){
            sempty("https://cdn.dribbble.com/users/844846/screenshots/2981974/empty_cart_800x600_dribbble.png")
           }
           else{
            sempty("")
           }
       })
       
    },[items])

    useEffect(()=>{
        data = axios.get("http://localhost:3000/cart")
        data.then(data=>{
            samountItems(data.data.coun)
        })

    },[items])

    useEffect(()=>{
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
        data = axios.get("http://localhost:3000/cart")
        
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

        axios.post("http://localhost:3000/cart",{
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

        axios.post("http://localhost:3000/cart",{
            amountTem
        })
        }
    }
     
   return(
        <>
            <Nav/>
            <CartIcon coun={amountItems}/>
           <img id="emptyCart"alt="" src={empty}/>
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
                        axios.post("http://localhost:3000/cart",{
                            item
                        })
                    }}>remove</button>
                </div>
              })}
           </div>
        </>
    )
}
