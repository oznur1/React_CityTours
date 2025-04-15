import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { FaArrowAltCircleDown } from "react-icons/fa"
import { useState } from 'react'

const Tour = ({ city, name, info, img }) => {
    const [infoBoxVisible, setInfoBoxVisible] = useState(false);

    const toggleInfoBox = () => {
        setInfoBoxVisible(!infoBoxVisible);  // State'i değiştir
      }; 


      const [close,setClose]=useState(true);
      const toggleClose=()=>{
        setClose(!close);
      }

  return (
    <article className='tour'>
      <div className='img-container'>
      <img src={img} alt={name} className="tour-image" width={600} />

        <span onClick={toggleClose}
         className='close-btn'>
          <AiOutlineClose />
        </span>
      </div>
    {close && (
      <div className='tour-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <div className="info-wrapper">
          <h5>info</h5>
          <span onClick={toggleInfoBox}
          className="dark-btn">
            <FaArrowAltCircleDown size={20} color="black" />
          </span>
        </div>
        {infoBoxVisible && <p>{info}</p>}
      </div>
      )}
    </article>
  )
}

export default Tour


