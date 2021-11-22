import React from "react";
import "./Styles/styles.scss"
import Menu from "./menu"
import Whowe from "./whowe"
import Home from "./home";
import uuid from 'react-uuid';
import { data} from "./data";

var li = []
var rli=[]
var lick = []
var cou = 1

class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:<Home/>,
      nuevo:[],
      check:[],
      co:0,
      
      }
    
}
clean=()=>{
    this.setState({content:undefined})
    
  }
selec=(combo)=>{
  //displaying items in cart
  var cont = <ul id="buy" key={data[combo].name}>
  <b>Product</b>  
  <b>Quantity</b> 
  <b>Total</b>
  <div id="compra"><img src={data[combo].img} alt="combo"></img> {data[combo].name}
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
      //incresing the quantity of items using the button +
      data[combo].num = data[combo].num+1
     
      })
    .then(()=>{
      /*emptying the array so the quantity of items can updated
      when the button + is pressed*/
      this.setState({nuevo:[]})
      
      for(var i in this.state.check){
        /*adding elements to an array to use it to know the 
        items that were selected before, the items are added from the end to the
        beginig of the array because the items change position whe added again*/
       lick.push(this.state.check[(this.state.check.length-1)-i])
       //the documentation in this button "+" also explains the button "-"
      }
      //emptiying the check array so the items can be updated
      this.setState({check:[]})
    })
    .then(()=>{
      for(var i in lick){
        //ading items already updated to cart 
        this.selec(lick[i])
      }
    })
    
  } 
  }>+</button>
  <b id="price">${data[combo].price}</b>
  </div>
</ul>
if(this.state.check.includes(data[combo].name)===false && this.state.check.includes("")===false) {
  //array used it to store items
  this.setState({nuevo:[cont].concat(this.state.nuevo)})
  //array used it to check if an elemnt was already added to the cart
  this.setState({check:[data[combo].name].concat(this.state.check)})
  
}
//switching to cart page
this.setState({content:this.state.nuevo})
    
}

componentDidMount(){
  //adding items from the menu to array so can be displayed
  for(var i in data){
    
    for(var j in data[i]){
     if(cou%2===1){
        
      if(j !== "num" && j==="img") {
        li.push(<img src={data[i][j]} alt="combo" key={uuid()}></img>)
      }
      if(j !== "num" && j==="price") {
        li.push(<p key={uuid()}>${data[i][j]}</p>)
      }

      if(j==="name"){
        li.push(<button id = {data[i].name}  key={uuid()} onClick={(e)=>{
          new Promise((mf)=>{
          mf()
          })
          .then(()=>{
            this.selec(e.target.id)
          })
          
        }}>Buy</button>)
      }

      if(j !== "num" && j!=="img" && j!=="price") {
        li.push(<p key={uuid()}>{data[i][j]}</p>,)
      }
      
    }
   
    if(cou%2===0){
      
      if(j !== "num" && j==="img") {
        rli.push(<img src={data[i][j]} alt="combo" key={uuid()}></img>)
      }
      if(j !== "num" && j==="price") {
        rli.push(<p key={uuid()}>${data[i][j]}</p>)
      }

      if(j==="name"){
        rli.push(<button id = {data[i].name}  key={uuid()} onClick={(e)=>{
          new Promise((mf)=>{
          mf()
          })
          .then(()=>{
            this.selec(e.target.id)
            
          })
          
        }}>Buy</button>)
      }

      if(j !== "num" && j!=="img" && j!=="price") {
        rli.push(<p key={uuid()}>{data[i][j]}</p>,)
      }
      
    }
    
    }
      
      
      cou = cou+1
      
}
 
}

render(){
  return(
        <>
         <ul id = "nav" >
            <button onClick={()=>{
            //display items in menu
              this.setState({content:<Menu cont={[
              <div id="comb" key={uuid()} >{li.map(v=>{return v})}</div>,
              <div id="combr" key={uuid()} >{rli.map(v=>{return v})}</div>
            ]}/>}) 
            }}>Menu</button>

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