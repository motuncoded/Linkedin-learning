import { isFocusable } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'

function GithubUser({name,location,avatar, username,followers}){
  return(
    <div>
    <h1>{name}</h1>
    <p>{location}</p>
    <p>  {username}</p>
    <code> {followers}</code>
    <img src={avatar} height={100}  alt={name}/>
    </div>
  )
}
const Data = () => { 
    const [info, setInfo] = useState(null);
    useEffect(() => {
      fetch(`https://api.github.com/users/moonhighway`
      ).then((response)=> response.json())
      .then(setInfo)
    },[])
if (info) 
return (
  <div>
  <GithubUser 
  name={info.name}
  location={info.location}
  avatar={info.avatar_url}
  username={info.twitter_username}
  followers={info.followers}/>

        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        </div>
)
  return (
    <div>

    </div>
  )
}

export default Data