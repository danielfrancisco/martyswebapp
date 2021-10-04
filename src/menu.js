import React, { useImperativeHandle } from "react";
import "./Styles/styles.scss";
import uuid from 'react-uuid'

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






