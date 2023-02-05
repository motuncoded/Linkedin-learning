import React, { useState } from 'react'

const UseState = () => {
    // the useState is an array, the first one is undefined while the second is a function
    const [emotion,setEmotion] = useState("Happy")
  return (
    <div>
        <h1>current emotion is {emotion}</h1>
        <button onClick={()=>setEmotion("sad")}>Sad</button>
        <button onClick={()=>setEmotion("exicted")}>Exicted</button>
    </div>
  )
}

export default UseState