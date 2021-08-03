import React from "react";
import "./Styles/styles.scss"

class Menu extends React.Component{
  constructor(props) {
    super(props);
    
  }
  render(){
    
      return(
        <>
         <div id="martyscombo"> 
          <p>Marty's Combo</p>
         </div>
         
        </>
      )
  }
}

class Whowe extends React.Component{
  constructor(props) {
    super(props);
    
  }
  render(){
    
      return(
        <>
         <p>who we are</p>
         
        </>
      )
  }
}


class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:null,
    }
}
  render(){
    return(
        <>
         <ul class = "nav">
            <button onClick={()=>{
             this.setState({content:<Menu/>})}}>Menu</button>
            <button onClick={()=>{
             this.setState({content:null})}}>Home</button>
            <button onClick={()=>{
             this.setState({content:<Whowe/>})}}>Who we are</button>
         </ul>
        <div>{this.state.content}</div>
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