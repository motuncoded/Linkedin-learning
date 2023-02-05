import React from 'react';


const data =[
    {greet:"Hello", id:1},
    {greet:"Hi", id:2},
    {greet:"Yo", id:3}
]
const Greeting = () => {
  return (
    <div>
        {
            data.map(item =>{
                return(
                <p key={item.id}>{item.greet}</p>
                )
            })
        }
    </div>
  )
}

export default Greeting