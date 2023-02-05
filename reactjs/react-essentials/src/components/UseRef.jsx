import React, { useRef } from 'react'

const UseRef = () => {
  const txtTitle = useRef();
  const hexColor =  useRef();

  const submit = (e)=> {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = '';
    
  }
  return (
    <form onSubmit={submit}>
        <input type="text" ref={txtTitle} placeholder='color title' />
        <input type="color" ref={hexColor} />
    <button>Add</button>
    <p></p>
    </form>
  )
}

export default UseRef