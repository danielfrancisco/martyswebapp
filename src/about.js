import { useEffect,useState } from "react"
import "./Styles/styles.scss"
import Nav from "./nav"
import axios from "axios"

let data = axios.get("http://localhost:3000/about")
export default function About(){
  const[paragraph,sparagraph]=useState("")

  useEffect(()=>{
    data.then(data=>{
      sparagraph(data.data[0].paragraph)
      
    })
  },[])

    return(
       <>
        <Nav/>

           <p id="whowe">
            {paragraph}
           </p>
       </>
    )
}