import React from "react";
import "./Styles/styles.scss"
import Menu from "./menu"
import Whowe from "./whowe"
import Home from "./home";
import { v4 as uuidv4 } from 'uuid';
import { data, or} from "./data";

var li = []
var rli=[]
var lick = []
var cou = 1
var nne = []
var nnc = []
var carcoun = 0

class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content:<Home/>,
      nuevo:[],
      check:[],
      co:0,
      pric : "",
      nicart:0
      }
    }

    

 recar = () =>{
  this.setState({content:this.state.nuevo})
 }

clean=()=>{
    this.setState({content:undefined})
    
  }
  
selec=(combo)=>{
  
  for(var i in or){
    if(or[i]===data[combo].price){
      var newpri=or[i]*data[combo].num
      
    }
  }
  this.setState({pric:newpri})
  //displaying items in cart
  var cont = <ul id="buy" key={uuidv4()}>
  <b>Product</b>  
  <b>Quantity</b> 
  <b>Price</b>
  <div id="compra" key={uuidv4()}><img src={data[combo].img} alt="combo"></img> {data[combo].name}
  <button id="decrease" onClick={()=>{
    new Promise((mr)=>{
      
      mr()
    })
    .then(()=>{
      if(data[combo].num>1){
        //reducing the quantity of items using the button -
      data[combo].num = data[combo].num-1
      
      }
    })
    .then(()=>{
      this.setState({nuevo:[]})
      
      for(var i in this.state.check){
        lick.push(this.state.check[i])
      }
      this.setState({check:[]})
      
    })
    .then(()=>{
      for(var i in lick){
        if(lick[i]===" "===false){
          this.selec(lick[i])
        }
        
      }
    })
  }}>-</button>

  <b id="number" >{data[combo].num}</b>
  <button id="increment" onClick={()=>{
    
    new Promise((mr)=>{
      
      mr()
    })
    .then(()=>{
      
      //incresing the quantity of items using the button +
      data[combo].num = data[combo].num+1
      for(var i in or){
        if(or[i]===data[combo].price){
          var newpri=or[i]*data[combo].num
          
        }
      }
      this.setState({pric:newpri})
      
       })
    .then(()=>{
      /*emptying the array so the quantity of items can updated
      when the button + is pressed*/
      this.setState({nuevo:[]})
      
      for(var i in this.state.check){
        /*adding elements to an array to use it to know the 
        items that were selected before, the items are added from the end to the
        beginig of the array because the items change position whe added again*/
       lick.push(this.state.check[(this.state.check.length-1)-i])
       //the documentation in this button "+" also explains the button "-"
      }
      //emptiying the check array so the items can be updated
      this.setState({check:[]})
    })
    .then(()=>{
      for(var i in lick){
        //ading items already updated to cart
        if(lick[i]===" "===false){
          this.selec(lick[i])
          
        }
        
      }
    })
    
  } 
  }>+</button>
  <b id="price" >${this.state.pric}</b>
  <button id="remove" onClick={()=>{
     nne = [...this.state.nuevo]
     nne[this.state.check.indexOf(combo)] = " "
    nnc = [...this.state.check]
    nnc[this.state.check.indexOf(combo)] = " "
    this.setState({nuevo:nne})
    new Promise((maf)=>{
     maf()
     this.recar()
     this.setState({check:nnc})
     this.setState({lick:nnc})
    })
    .then(()=>{
      this.recar()
    })
    .then(()=>{
      this.setState({nicart:this.state.nicart-1})
      carcoun = carcoun+1
    })
    .then(()=>{
      this.setState({check:nnc})
    })
    .then(()=>{
      
    }
    
    )
    
    
    
  }}>X</button>
  </div>
</ul>
if(this.state.check.includes(data[combo].name)===false && this.state.check.includes("")===false) {
  //array used it to store items
  this.setState({nuevo:[cont].concat(this.state.nuevo)})
  //array used it to check if an elemnt was already added to the cart
  this.setState({check:[data[combo].name].concat(this.state.check)})
  
}
//switching to cart page
this.setState({content:this.state.nuevo})
    
}

componentDidMount(){
  //adding items from the menu to array so can be displayed
  for(var i in data){
    for(var j in data[i]){
     /*with the help of the variable cou used as a counter 
     are able to set each item  in their respective colum.
     Items in the lef columm are stored in the li array and
     the items in the right columm are stored in the rli array*/
     if(cou%2===1){
        if(j !== "num" && j==="img") {
        li.push(<img src={data[i][j]} alt="combo" key={uuidv4()}></img>)
      }
      if(j !== "num" && j==="price") {
        li.push(<p className="priceco" key={uuidv4()}>${data[i][j]}</p>)
      }

      if(j==="name"){
        li.push(<button id = {data[i].name}  key={uuidv4()} onClick={(e)=>{
          this.setState({nicart:this.state.nicart+1})
          new Promise((mf)=>{
          mf()
          })
          .then(()=>{
            this.selec(e.target.id)
          })
          
        }}>Buy</button>)
      }

      if(j !== "num" && j!=="img" && j!=="price") {
        li.push(<p key={uuidv4()}>{data[i][j]}</p>,)
      }
      
    }
     /*with the help of the variable cou used as a counter 
     are able to set each item  in their respective colum.
     Items in the lef columm are stored in the li array and
     the items in the right columm are stored in the rli array*/
    if(cou%2===0){
      if(j !== "num" && j==="img") {
        rli.push(<img src={data[i][j]} alt="combo" key={uuidv4()}></img>)
      }
      if(j !== "num" && j==="price") {
        rli.push(<p className="priceco" key={uuidv4()}>${data[i][j]}</p>)
      }

      if(j==="name"){
        
        rli.push(<button id = {data[i].name}  key={uuidv4()} onClick={(e)=>{
          this.setState({nicart:this.state.nicart+1})
          new Promise((mf)=>{
          mf()
          })
          .then(()=>{
            this.selec(e.target.id)
            
          })
          
        }}>Buy</button>)
      }

      if(j !== "num" && j!=="img" && j!=="price") {
        rli.push(<p key={uuidv4()}>{data[i][j]}</p>,)
        }
      }
    }
      cou = cou+1
  }
 }

render(){
  return(
        <>
         <ul id = "nav" >
            <button onClick={()=>{
            //display items in menu
              this.setState({content:<Menu cont={[
              <div id="pali" key={uuidv4()}>
              <div id="comb" key={uuidv4()} >{li.map(v=>{return v})}</div>
              </div>,
              <div id="parli" key={uuidv4()}>
              <div id="combr" key={uuidv4()} >{rli.map(v=>{return v})}</div>
              </div>
              
            ]}/>}) 
            }} id="menubutton">Menu</button>

            <button onClick={()=>{
             this.setState({content:<Home/>})}} id="homebutton">Home</button>
            
            <button onClick={()=>{
             this.setState({content:<Whowe/>})}}id="aboutbutton">About us</button>
         </ul>
          <div id="car" onClick={()=>{
            if(this.state.nuevo.length===0){
             this.setState({content:<img id="emptycar"  alt="emptycart"
             src="https://cdn.dribbble.com/users/844846/screenshots/2981974/empty_cart_800x600_dribbble.png"/>}) 
            }
            else{
              this.setState({content:this.state.nuevo})
            }
            
          }}>
            <p>{this.state.nicart}</p>
            <img alt="cart" src="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1142859120?k=20&m=1142859120&s=170667a&w=0&h=mDJbGHOildt4Ip7TOmNt2IN9icVMyvd0_ByrqYhpAVA="/>
          </div>
         <div key={uuidv4()}>{this.state.content}</div>
        </>
         ) 
          }
}

export default Body