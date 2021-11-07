import React from "react";
import "./Styles/styles.scss"
import Menu from "./menu"
import Whowe from "./whowe"
import Home from "./home";
import uuid from 'react-uuid';
import { data} from "./data";
import { computeHeadingLevel } from "@testing-library/dom";

var li = []
var coun = 0
var lick = []
var cnu = []
class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:<Home/>,
      nuevo:[],
      check:[],
      co:0
      }
    
}
clean=()=>{
    this.setState({content:undefined})
    
  }
selec=(combo)=>{
    
  var cont = <ul id="buy" key={data[combo].name}>
  <b>Product</b>  
  <b>Quantity</b> 
  <b>Total</b>
  <div id="compra"><img src={data[combo].img}></img> {data[combo].name}
  <button id="decrease" onClick={()=>{
    new Promise((mr)=>{
      
      mr()
    })
    .then(()=>{
      if(data[combo].num>1){
      data[combo].num = data[combo].num-1
      
      }
    })
    .then(()=>{
      this.setState({nuevo:[]})
      for(var i in this.state.check){
        lick.push(this.state.check[i])
      }
      this.setState({check:[]})
    })
    .then(()=>{
      for(var i in lick){
        this.selec(lick[i])
      }
    })
  }}>-</button>

  <b id="number">{data[combo].num}</b>
  <button id="increment" onClick={()=>{
    new Promise((mr)=>{
      
      mr()
    })
    .then(()=>{
      data[combo].num = data[combo].num+1
     
      })
    .then(()=>{
      this.setState({nuevo:[]})
      for(var i in this.state.check){
        lick.push(this.state.check[i])
      }
      this.setState({check:[]})
    })
    .then(()=>{
      for(var i in lick){
        this.selec(lick[i])
      }
    })
    
  } 
  }>+</button>
  <b id="price">${data[combo].price}</b>
  </div>
</ul>
if(this.state.check.includes(data[combo].name)==false && this.state.check.includes("")==false) {
  this.setState({nuevo:[cont].concat(this.state.nuevo)})
  this.setState({check:[data[combo].name].concat(this.state.check)})
  
}
this.setState({content:this.state.nuevo})
    
}

componentDidMount(){
  for(var i in data){
    for(var j in data[i]){
      
      if(j != "num" && j=="img") {
        li.push(<img src={data[i][j]}></img>)
      }
      if(j != "num" && j=="price") {
        li.push(<p >${data[i][j]}</p>)
      }

      if(j=="name"){
        li.push(<button id = {data[i].name} onClick={(e)=>{
          new Promise((mf)=>{
          mf()
          })
          .then(()=>{
            this.selec(e.target.id)
          })
          
        }}>Buy</button>)
      }

      if(j != "num" && j!="img" && j!="price") {
        li.push(<p>{data[i][j]}</p>,)
      }
      
      }
  }
}

render(){
  return(
        <>
         <ul class = "nav">
            <button onClick={()=>{
             this.setState({content:<Menu cont={
              <div id="martys" key={uuid()}>{li}</div>
              
          }/>})}}>Menu</button>

            <button onClick={()=>{
             this.setState({content:<Home/>})}}>Home</button>

            <button onClick={()=>{
             this.setState({content:<Whowe/>})}}>About us</button>
         </ul>

         <div key={uuid()}>{this.state.content}</div>
        </>
         ) 
            
      }
}
export default Body