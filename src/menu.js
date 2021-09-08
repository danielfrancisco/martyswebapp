import React, { useImperativeHandle } from "react";
import "./Styles/styles.scss";
import uuid from 'react-uuid'
import Buy from "./buy";
class Menu extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        content:[],
        oc:[]
      }
}
componentDidMount(){
  //adding page content
    this.setState({content:this.state.content.concat(<div key={uuid()}><div id="martys">
    <img src="https://www.seekpng.com/png/full/482-4822222_burger-
    and-fries-png-vector-library-12oz-coke.png"></img>
    <p>Martys Combo</p>
    <button onClick={()=>{this.buy("martys")}}>Buy</button>
   </div>
   <div id="cowboy">
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?
    crop=1.00xw:0.748xh;0,0.156xh&resize=980:*"></img>
    <p>Cowboy Combo</p>
    <button onClick={()=>{this.buy("cowboy")}}>Buy</button>
   </div></div>)})
 }
 
  buy=(c)=>{
  /*saving item code word in argument and then in prop
  to then add it to buy page based on the prop data
  */
  this.setState({content:<Buy content={c}/>})
  
  }
    render(){
     return(
          <>
          {this.state.content}
          </>
        )
    }
  }

export default Menu






