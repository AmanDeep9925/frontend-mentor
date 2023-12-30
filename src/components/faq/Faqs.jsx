import React, { useState } from 'react'
import "./Faq.css"
import iconPlus from "../../assets/images/icon-plus.svg";
import iconMinus from "../../assets/images/icon-minus.svg";


const Faq = ({question,answer}) => {
  const [active,setActive] = useState(false);
  const handleChangeActive = () => {
    setActive((prevIcon) => {
      console.log(prevIcon)
      return !prevIcon;
    })
  }
  return (
    <article>
      <p className="question" onClick={handleChangeActive}>{question}
        {
          active ?
          <span><img src={iconMinus} alt="faq-icon"/></span> :
          <span> <img src={iconPlus} alt="faq-icon"/></span> 
        }
      </p>
      {
       active && <p className="answer">{answer}</p>
      }
    </article>
  )
}

export default Faq;