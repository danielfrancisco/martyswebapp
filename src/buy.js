import React from "react";
import "./Styles/styles.scss"

class Buy extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        content:[],
        number:1,
        price:undefined,
        ogprice:undefined
      }
      
  }
  componentDidMount(){
    //adding item to content state based on props data
    switch(this.props.content){
      case "cowboy":
      this.setState({content:this.state.content.concat(<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?
      crop=1.00xw:0.748xh;0,0.156xh&resize=980:*"></img>,"Cowboy combo")})
      this.setState({price:3})
      this.setState({ogprice:3})
      break;
      case "martys":
      this.setState({content:this.state.content.concat(<img src="https://www.seekpng.com/png/full/482-4822222_burger-
    and-fries-png-vector-library-12oz-coke.png"></img>,"Martys combo")})
    this.setState({price:6.25})
    this.setState({ogprice:6.25})
      break;
      
   }
  }
  raisenumber=()=>{
    this.setState({number:++this.state.number})
    this.setState({price:this.state.price+this.state.ogprice})
  }

  reducenumber=()=>{
    if(this.state.number>1){
      this.setState({number:--this.state.number})
      this.setState({price:this.state.price-this.state.ogprice})
    }
    
  }
  
  render(){
    return(
        <>
         <ul id="buy">
         <b>Product</b> 
         <b>Quantity</b> 
         <b>Total</b>
         <div id="compra">{this.state.content}
         <button id="decrease" onClick={this.reducenumber}>-</button>
         <b id="number">{this.state.number}</b>
         <button id="increment"onClick={this.raisenumber}>+</button>
         <b id="price">${this.state.price}</b>
         </div>
         </ul>
        </>
      )
    }
  }

export default Buy

