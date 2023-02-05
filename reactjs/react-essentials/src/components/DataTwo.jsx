import React, { useEffect, useState } from 'react'

const User =({name,location,avatar, username,followers}) =>{
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
const DataTwo = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.github.com/users/mojodna`
        ).then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [])
    if(loading) return <h1>Loading ....</h1>
    if (error) return <pre>JSON.stringify(error)</pre>
    if(!data) return null
    if(data)
    return(
        <div>
        <User name={data.name}  location={data.location}
  avatar={data.avatar_url}
  username={data.twitter_username}
  followers={data.followers}/>
      
        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        </div>
    )
  return (
    <div>
    </div>
  )
}

export default DataTwo