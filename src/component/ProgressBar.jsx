import React from 'react'
import "./ProgressBar.css"

const ProgressBar = ({value}) => {
    const progressBarStyles  = {
        width: `${value}%`,
        height: '14px',
        backgroundColor: 'rgb(22, 159, 75)',
      };
  return (
    <div className="progress-bar-container">
      <div className="progress-bar"  style={progressBarStyles}></div>
    </div>
  )
}

export default ProgressBar