import { useEffect, useState } from "react";
import Nav from "./nav"
import "./Styles/styles.scss";
import axios from "axios"
import CartIcon from "./cartIcon";

let data = axios.get("http://localhost:3000/cart")

export default function Cart(){
    const[items,sitems] = useState([])
    const[coun,scoun]=useState([])

    useEffect(()=>{
        data = axios.get("http://localhost:3000/cart")
    },[])

    useEffect(()=>{
      data.then(data=>{
        for(let i in data.data){
            sitems(items=>[...items,data.data[i]])
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
                for(let i in data.data){
                    sitems(items=>[...items,data.data[i]])
                   scoun(coun=>[...coun,0])
                }
              })
        }
      },[items,data,coun])

    function incre(index){
        let nextCoun = coun.map((item,counIndex)=>{
            if(index===counIndex){
                return item+1
            }
            return item
            
        })

        scoun(nextCoun)
    }

    function reduce(index){
        let nextCoun = coun.map((item,counIndex)=>{
            if(index===counIndex && item>1){
                return item-1
            }
            return item
            
        })

        scoun(nextCoun)
    }
     
   return(
        <>
            <Nav/>
           <CartIcon/>
           <div id="cartBag">
              {items.map((item,itemIndex)=>{
                
                return <div >
                    <img alt="img" src={item.img}/>
                    <p>{item.name}</p>
                    <p>{coun[itemIndex]}</p>
                    <button id="addOne" onClick={()=>{
                       incre(itemIndex)
                    }}>+</button>
                    <button id="removeOne" onClick={()=>{
                       reduce(itemIndex)
                    }}>-</button>
                    <button id="remove" onClick={()=>{
                        sitems([])
                        window.location.reload()
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
