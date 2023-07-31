import { useEffect,useState } from "react"
import "./Styles/styles.scss"
import Nav from "./nav"
import axios from "axios"
import { useRef } from "react"


export default function About(){
  const[paragraph,sparagraph]=useState("")
  const aboutUs = useRef()

  useEffect(()=>{
    axios.get("https://beautiful-cyan-fatigues.cyclic.cloud/about")
    .then(data=>{
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