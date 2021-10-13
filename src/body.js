import React from "react";
import "./Styles/styles.scss"
import Menu from "./menu"
import Whowe from "./whowe"
import Home from "./home";
import uuid from 'react-uuid';
import { data} from "./data";




class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:<Home/>,
      nuevo:undefined,
      check:[],
      }
    
}
clean=()=>{
    this.setState({content:undefined})
    
  }

  selec=(combo)=>{
    var combos = {
      martys:
        <ul id="buy" key={uuid()}>
          <b>Product</b>  
          <b>Quantity</b> 
          <b>Total</b>
          <div id="compra"><img src={data.martys.img}></img> {data.martys.name}
          <button id="decrease" onClick={()=>{
            if(data.martys.num<2==false){data.martys.num = data.martys.num-1}
            this.selec()
          }}>-</button>
          <b id="number">{data.martys.num}</b>
          <button id="increment" onClick={()=>{new Promise((mf)=>{
            mf()
          })
          .then(()=>{
            data.martys.num = data.martys.num+1
          })
          .then(()=>{
            this.selec()
          })
          }}>+</button>
          <b id="price">${data.martys.price}</b>
          </div>
        </ul>,
    
      cowboy : <ul id="buy" key={uuid()}>
      <b>Product</b>  
      <b>Quantity</b> 
      <b>Total</b>
      <div id="compra"><img src={data.cowboy.img}></img> {data.cowboy.name}
      <button id="decrease" onClick={()=>{
            if(data.cowboy.num>1){data.cowboy.num = data.cowboy.num-1
              this.selec()}
          }} >-</button>
      <b id="number" >{data.cowboy.num}</b>
      <button id="increment" onClick={()=>{new Promise((mf)=>{
            mf()
          })
          .then(()=>{
            data.cowboy.num = data.cowboy.num+1
          })
          .then(()=>{
            this.selec()
          })
          }}>+</button>
      <b id="price">${data.cowboy.price}</b>
      </div>
    </ul>
    
    }
    if(this.state.check.includes(combo)==false){
      this.setState({check:[combo].concat(this.state.check)})
      switch(combo){
        case "martys":
          this.setState({nuevo:[this.state.nuevo,combos.martys]})
        break;
        case "cowboy":
          this.setState({nuevo:[this.state.nuevo,combos.cowboy]})
        break;
      }
    }
    
    
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