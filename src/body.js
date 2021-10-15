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
      nuevo:[],
      check:[],
      c:0
      }
    
}
clean=()=>{
    this.setState({content:undefined})
    
  }
selec=(combo,img,num,price,)=>{
    
    var cont = <ul id="buy" key={combo}>
          <b>Product</b>  
          <b>Quantity</b> 
          <b>Total</b>
          <div id="compra"><img src={img}></img> {combo}
          <button id="decrease" onClick={()=>{new Promise((mp)=>{
           mp()
          })
          .then(()=>{
            data[combo].num = data[combo].num-1
          })
          .then(()=>{
            for(var i in this.state.check){
              
              if(this.state.check[i] == combo){
                this.state.check[i] = ""
                this.state.nuevo[i] = ""
                
               console.log(this.state.nuevo) 
              }
           } })
           .then(()=>{
            this.selec(data[combo].name,data[combo].img,data[combo].num,data[combo].price)
           })
          }}>-</button>
          <b id="number">{num}</b>
          <button id="increment" onClick={()=>{new Promise((mp)=>{
           mp()
          })
          .then(()=>{
            data[combo].num = data[combo].num+1
          })
          .then(()=>{
            for(var i in this.state.check){
              
              if(this.state.check[i] == combo){
                this.state.check[i] = ""
                this.state.nuevo[i] = ""
                
               console.log(this.state.nuevo) 
              }
           } })
           .then(()=>{
            this.selec(data[combo].name,data[combo].img,data[combo].num,data[combo].price)
           })
          }}>+</button>
          <b id="price">${price}</b>
          </div>
        </ul>
        if(this.state.check.includes(combo)==false){
          this.setState({nuevo:[cont].concat(this.state.nuevo)})
          this.setState({check:[combo].concat(this.state.check)})
        }
        
        this.setState({content:this.state.nuevo})
       /*for(var i in this.state.nuevo){
        console.log(this.state.nuevo[i].key)
       }*/
       
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
                .then(()=>{this.selec(data.martys.name,data.martys.img,data.martys.num,data.martys.price)})
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
                .then(()=>{this.selec(data.cowboy.name,data.cowboy.img,data.cowboy.num,data.cowboy.price)})
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