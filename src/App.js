import React from "react";
import "./Styles/styles.scss"
import Menu from "./menu"
import Buy from "./buy"
import Whowe from "./whowe"
import Home from "./home";

class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:<Home/>,
    }
    
}
 render(){
  return(
        <>
         <ul class = "nav">
            <button onClick={()=>{
             this.setState({content:<Menu/>})}}>Menu</button>
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

class App extends React.Component{
  constructor(props){
    super(props)
}
  render(){
    return(
        <>
         <Body/>
         </>
      )
  }
}

export default App