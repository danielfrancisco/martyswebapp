import React from "react";
import "./Styles/styles.scss";
import Home from "./home"

class Try extends React.Component{
    constructor(props){
      super(props)
      this.state={
        content:<div id="try">
        <p>Coming soon!</p>
        <button onClick={()=>{
          this.setState({content:<Home/>})
        }}>Go back</button>
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
  
  export default Try