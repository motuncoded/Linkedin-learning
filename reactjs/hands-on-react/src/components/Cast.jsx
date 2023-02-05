import React, { useEffect, useState } from 'react'
import  casts from "../components/casts.json"
const Cast = () => {
    const [cast, setCast] = useState([]);
    async function fetchCast(){
        const response = await fetch("casts.json");
        setCast(await response.json())
    }
    useEffect(()=>{
        fetchCast();
    });
  return (
    <div className='wrapper'>
        {casts.map(member=>(
            <div key={member.id} >
                <a data-tooltip={member.name}>
<h4>{member.name}</h4>
<p>{member.age}</p>
</a>
</div>
        ))}
    </div>
  )
}

export default Cast