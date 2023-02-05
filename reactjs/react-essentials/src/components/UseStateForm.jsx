import React, { useState } from 'react'

const UseStateForm = () => {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000")
    const submit = (e) =>{
        e.preventDefault();
        alert(`${color} ${title} `)
        setColor("000000");
        setTitle("");
    }
  return (
    <form onSubmit={submit}>
    <input type="text" value={title}
    onChange={(e)=>
    setTitle(e.target.value)} placeholder='color title' />
    
    <input type="color"
    value={color}  
    onChange={(e) => setColor(e.target.value)} />
<button>Add</button>
</form>
)
  
}

export default UseStateForm