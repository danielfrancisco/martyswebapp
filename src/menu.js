import React from "react";
import "./Styles/styles.scss"
import Buy from "./buy";

class Menu extends React.Component{
    constructor(props) {
      super(props);
      this.state={
          content: <Buy/>
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

export default Menu