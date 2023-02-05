import React, { useState } from 'react'

const Hooks = () => {
    const [countUp, setCountUp] = useState(0)


  return (
    <div>
        <button onClick={()=> setCountUp(countUp + 1 )} className={countUp ? "red" : "blue"}>{countUp === 0 ? "Click to supported" : `supported ${countUp}`}</button>
   
 </div>

  )
}

export default Hooks