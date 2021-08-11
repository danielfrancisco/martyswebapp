import React from "react";
import "./Styles/styles.scss"
import Menu from "./menu"
import Buy from "./buy"
import Whowe from "./whowe"

class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:undefined,
    }
}
  render(){
    var mv = [<p>hello</p>]
    return(
        <>
         <ul class = "nav">
            <button onClick={()=>{
             this.setState({content:<Menu/>})}}>Menu</button>
            <button onClick={()=>{
             this.setState({content:undefined})}}>Home</button>
            <button onClick={()=>{
             this.setState({content:<Whowe/>})}}>Who we are</button>
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