import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const [emotion,setEmotion] = useState("Happy");
    const [moment, setMoment] = useState("tired")

    useEffect(()=> {
        console.log(`it's ${emotion} right now`);
    }, [emotion])
    useEffect(()=>{
        console.log(`it is ${moment}`)
    },[moment])

  return (
    <div>
    <h1>Current emotion is {emotion}</h1>
    <button onClick={()=>setEmotion("sad")}>Sad</button>
    <button onClick={()=>setEmotion("exicted")}>Exicted</button>
    <h2>Current moment is {moment}</h2>
    <button onClick={()=>setMoment("grateful")}>Grateful</button>
</div>
  )
}

export default UseEffect