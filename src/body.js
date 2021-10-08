import React, { useImperativeHandle } from "react";
import "./Styles/styles.scss"
import Menu from "./menu"
import Whowe from "./whowe"
import Home from "./home";
import uuid from 'react-uuid'


class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:<Home/>,
      nuevo:[],
      mnumber:1,
      price:6.75,
      mogprice:undefined,
      number:1,
      check:"",
      bcontent:undefined
    }
    
}
  clean=()=>{
    this.setState({content:undefined})
    
  }

  selec=(combo,ima,price)=>{
    this.setState({price:price})
    if(this.state.check.includes(combo)==false){
      this.setState({check:[combo].concat(this.state.check)})
      this.setState({nuevo:[this.state.nuevo,<ul id="buy" key={uuid()}>
      <b>Product</b>  
      <b>Quantity</b> 
      <b>Total</b>
      <div id="compra"><img src={ima}></img> {combo}
      <button id="decrease"  onClick={()=>{if(document.getElementById("number").innerHTML>1)
      {document.getElementById("number").innerHTML=parseInt(
      document.getElementById("number").innerHTML)-1;  price=price-6.75}; 
      document.getElementById("price").innerHTML="$"+price
    }}>-</button>
      <b id="number">{this.state.number}</b>
      <button id="increment" onClick={()=>{document.getElementById("number").innerHTML=parseInt(
      document.getElementById("number").innerHTML)+1; price = price+6.75
      document.getElementById("price").innerHTML="$"+price
    }}>+</button>
      <b id="price">${this.state.price}</b>
      </div>
      </ul>]})}
    this.setState({content:this.state.nuevo})
    }
render(){
  return(
        <>
         <ul class = "nav">
            <button onClick={()=>{
             this.setState({content:<Menu cont={
              <div key={uuid()}><div id="martys">
              <img src="https://www.seekpng.com/png/full/482-4822222_burger-
              and-fries-png-vector-library-12oz-coke.png"></img>
              <p>Martys Combo</p>
              <button onClick={()=>{
                new Promise((final)=>{
                  final()
                }).then(()=>{this.clean()})
                .then(()=>{this.selec("martys",
                "https://www.seekpng.com/png/full/482-4822222_burger-and-fries-png-vector-library-12oz-coke.png",
                6.75)})
                }}>Buy</button>
              </div>
              <div id="cowboy">
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?
              crop=1.00xw:0.748xh;0,0.156xh&resize=980:*"></img>
              <p>Cowboy Combo</p>
              <button onClick={()=>{
                new Promise((final)=>{
                  final()
                }).then(()=>{this.clean()})
                .then(()=>{this.selec("cowboy",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?crop=1.00xw:0.748xh;0,0.156xh&resize=980:*",
                3)})
              }}>Buy</button>
             </div></div>
             }/>})}}>Menu</button>

            <button onClick={()=>{
             this.setState({content:<Home/>})}}>Home</button>

            <button onClick={()=>{
             this.setState({content:<Whowe/>})}}>About us</button>
         </ul>
         {this.state.content}
         
         
         
         </>
         ) 
        }
}

export default Body