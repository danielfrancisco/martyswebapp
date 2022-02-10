import React from "react";
import Try from "./Try";
import "./Styles/styles.scss"


class Home extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        content:<div id="home">
             
        <ul id="hero">
        <p>Big things are coming!</p>
        <button onClick={()=>{
          this.setState({content:<Try/>})
        }} id="tryonebutton">Try one</button>
        </ul>
        <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMj
        A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="burger"></img>
     </div>  
      }
    }
    render(){
        return(
        <>
         {this.state.content}
               
        </>
               
            )
          }

}

export default Home