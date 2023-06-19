import React from 'react'
import "./Card.css"

const Card = ({i,link,title,desc}) => {
    return (
        <div className='card'>
          <div className="content">
          <div className="heading">{title}</div>
          <img src={i} alt="" className="c-img" />
          <div className="para">{desc}</div>
          <a href={link} target="_blank" rel="noreferrer">
            <button className='btn'>GitHub</button>
          </a>
          </div>
        </div>
      )
}

export default Card