import React from "react";
import "./Styles/styles.scss"

class Buy extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        combos: [<div id="martyscombo"><img src=""></img><p>Martys combo</p></div>
        ],
        arr:[]
    }
  }
  emptylist=()=>{
    var emptyarr=[];
    this.setState({arr:emptyarr})
  }
  addcombo = (...compras)=>{
    this.setState({combos:undefined})
    this.setState({arr:this.state.arr.concat(...compras)})
    
    
  }
  
  render(){
    var mys=this.state.arr
    const listItems = mys.map((mls) =>
    <div>{mls}</div>)
    
      return(
        <>
         <div>{this.state.combos}</div>
         <div id="compras">{listItems}</div>
         <button id="buymartys" onClick={()=>{if(this.state.arr.includes("martys")==false){this.addcombo("martys","combo")};
          }}>Buy martys</button>
         <button id="buycowboy" onClick={()=>{if(this.state.arr.includes("cowboy")==false){this.addcombo("cowboy")};
          }}>Buy cow</button>
        </>
      )
    }
  }

export default Buy