import { useEffect, useState, useRef } from "react";
import Nav from "./nav"
import emptycartImage from "./Images/emptycartImage.png"
import "./Styles/cart.scss";
import axios from "axios"
import CartIcon from "./cartIcon";
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux'
import { getMenuData, setCartCounter } from './slice'

export default function Cart(){
    const[items,sitems] = useState([])
    const[coun,scoun]=useState(0)
    const[amountItems,samountItems]=useState("")
    const emptyCart = useRef()
    const buydata = useSelector(state=>state)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        
        if(items.length<1){
            emptyCart.current.style.display="block"
        }

        else{
         emptyCart.current.style.display="none"
        }
       
    },[items])

    useEffect(()=>{
        let coun = 0
        for(let i in items){
            coun = coun + items[i].amount
            
        }
        samountItems(coun)
        dispatch(getMenuData(items))
    },[items])

    useEffect(()=>{
        
        for(let i in buydata.menudata){
            
            sitems(items=>[...items,buydata.menudata[i]])
            
        }
        
        /*axios.get("https://fantastic-bee-lingerie.cyclic.app/cart")
            .then(data=>{
            
            samountItems(data.data.coun)
            for(let i in data.data.items){
                sitems(items=>[...items,data.data.items[i]])
            scoun(coun=>[...coun,1])
            }
      })*/
        
    },[])

    useEffect(()=>{
        if(items.length<1 && coun.length>0){
            
           /* axios.get("https://fantastic-bee-lingerie.cyclic.app/cart")
            .then(data=>{
                
                for(let i in data.data.items){
                    sitems(items=>[...items,data.data.items[i]])
                   scoun(coun=>[...coun,0])
                }
              })*/
        }

    },[items,coun])

    function incre(combo){
        let tem = [...items]
        
        for(let i in tem){
            if(tem[i].name === combo.name){
                tem[i] = {...tem[i], amount: tem[i].amount+1}
                
            }
        }
        sitems(tem)
       
    }

    function reduce(combo){
        let tem = [...items]
        
        for(let i in tem){
            if(tem[i].name === combo.name){
                if(tem[i].amount>1){
                    tem[i] = {...tem[i], amount: tem[i].amount-1}
                }
                
                
            }
        }
        sitems(tem)
    }
    
     return(
        <>
            <Nav/>
            <CartIcon coun={amountItems}/>
           <img id="emptyCart" alt="  " src={emptycartImage} ref={emptyCart}/>
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
                        
                        let itemsAfterRemove = []
                        for(let i in items){
                            if(items[i].name===item.name===false){
                                itemsAfterRemove.push(items[i])
                            }
                        }

                        sitems(itemsAfterRemove)
                    }}>remove</button>
                </div>
              })}
           </div>
        </>
    )
}
