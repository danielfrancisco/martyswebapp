import { useEffect,useState } from "react"
import "./Styles/styles.scss"
import Nav from "./nav"
import axios from "axios"
import { useRef } from "react"


export default function About(){
  const[paragraph,sparagraph]=useState("We are just passionate about bringing happines to your table.")
  const aboutUs = useRef()

  useEffect(()=>{
    axios.get("https://fantastic-bee-lingerie.cyclic.app/about").then(data=>{
      sparagraph(data.data[0].paragraph)
      
    })
  },[])

  useEffect(()=>{
     aboutUs.current.innerHTML = paragraph
  },[paragraph])

    return(
       <>
        <Nav/>
          <p id="whowe" ref={aboutUs}>
          </p>
       </>
    )
}