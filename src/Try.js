import React from "react";
import "./Styles/styles.scss";
import Nav from "./nav";
export function Try (){
    
      return(
        <>
        <Nav/>
        <div id="try">
        <p>Coming soon!</p>
        <button onClick={
          ()=>{
            window.location.hash="/menu";
          }
        }>View Menu</button>
        </div>
        </>
        )
    
  }
  
  export default Try