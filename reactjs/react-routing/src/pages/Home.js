import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>Home
      <button onClick={()=>navigate("order")}>Place order</button>
    </div>
  )
}

export default Home