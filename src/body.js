import React from "react";
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
      mprice:6.75,
      mogprice:undefined,
      cnumber:1,
      cprice:3,
      cogprice:undefined
    }
    
}
  clean=()=>{
    this.setState({content:undefined})
    
  }

  selec=(c)=>{
    switch(c){
     case "martys":
      this.setState({nuevo:[this.state.nuevo,<ul id="buy">
      <b>Product</b> 
      <b>Quantity</b> 
      <b>Total</b>
      <div id="compra"><img src="https://www.seekpng.com/png/full/482-4822222_burger-
      and-fries-png-vector-library-12oz-coke.png"></img> Martys combo
      <button id="decrease" onClick={()=>{new Promise((minus)=>{
         minus()
      })
      .then(()=>{this.clean()})
      .then(()=>{if(this.state.mnumber>1){this.setState({mnumber:this.state.mnumber-1})}})
      .then(()=>{this.selec("martys")})
      }}>-</button>
      <b id="number">{this.state.mnumber}</b>
      <button id="increment"onClick={()=>{new Promise((increase)=>{
         increase()
      })
      .then(()=>{this.clean()})
      .then(()=>{this.setState({mnumber:this.state.mnumber+1})})
      .then(()=>{this.selec("martys")})
      }}>+</button>
      <b id="price">${this.state.mprice}</b>
      </div>
      </ul>]})
      this.setState({content:this.state.nuevo})
      break;

     case "cowboy":
      this.setState({nuevo:[this.state.nuevo,<ul id="buy">
      <b>Product</b>  
      <b>Quantity</b> 
      <b>Total</b>
      <div id="compra"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?
      //crop=1.00xw:0.748xh;0,0.156xh&resize=980:*"></img> Cowboy combo
      <button id="decrease" onClick={()=>{new Promise((minus)=>{
         minus()
      })
      .then(()=>{this.clean()})
      .then(()=>{if(this.state.cnumber>1){this.setState({cnumber:this.state.cnumber-1})}})
      .then(()=>{this.selec("cowboy")})
      }}>-</button>
      <b id="number">{this.state.cnumber}</b>
      <button id="increment" onClick={()=>{new Promise((increase)=>{
         increase()
      })
      .then(()=>{this.clean()})
      .then(()=>{this.setState({cnumber:this.state.cnumber+1})})
      .then(()=>{this.selec("cowboy")})
      }}>+</button>
      <b id="price">${this.state.cprice}</b>
      </div>
      </ul>]})
      this.setState({content:this.state.nuevo})
    break;
   }
    
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
                .then(()=>{this.selec("martys")})
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
                .then(()=>{this.selec("cowboy")})
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