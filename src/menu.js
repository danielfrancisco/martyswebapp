import React from "react";
import "./Styles/styles.scss";


class Menu extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        content:[],
        oc:[]
      }
}

  
    render(){
     return(
          <>
          {this.props.cont}
          </>
        )
    }
  }

export default Menu






