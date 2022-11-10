import React from 'react'
import "./styles.css";
import { FaWhatsapp } from 'react-icons/fa';




export const Whatsapp = () => {
  return (
    <div className="App">
      <a
        href="https://wa.me/+22226585935"
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
      <FaWhatsapp className=" my-float mx-auto "> </FaWhatsapp>
       
      </a>
    

  </div>
  )
}
