
export default function Nav(){
  
    return(
        <>
         <ul id = "nav" >
           <button id="homebutton"
           onClick={
            ()=>{
              window.location.hash="/";
            }
          }
           >Home
           </button>

           <button id="menubutton"
           onClick={
            ()=>{
              window.location.hash="/menu";
            }
          }
           >Menu
           </button>

           <button id="aboutbutton"
           onClick={
            ()=>{
              window.location.hash="/about";
            }
          }
           >About us
           </button>
         </ul>
        </>
    )
}