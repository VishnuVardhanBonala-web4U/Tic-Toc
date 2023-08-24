import React from 'react'
import "./Scoreboard.css"
const Scorecheck = ({xscore,oscore,tie,playing}) => {
  return (
    <>
    <div className="scoreboard">
         <span className={`x-score ${playing===true? "xplay":""}` }>X- {xscore}</span>
         <span className={`o-score ${playing===false ? "oplay" :""}`}>O- {oscore}</span>
         <span className='o-score'>TIE- {tie}</span>

         

    
        </div>       
         </>
  )
}

export default Scorecheck