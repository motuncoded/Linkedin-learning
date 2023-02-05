import React, { useState } from 'react'



function useInput(initialValue){
    const [value, setValue]=  useState(initialValue);
    return(
        {value, onChange:(e) => setValue(e.target.value)
        },
        ()=> setValue(initialValue)
    );
}
const CustomHook = () => {
const[titleProps, resetTitle]= useInput("");
const [colorProps, resetColor] = useInput("#000000")
    const submit =(e) =>{
        e.preventDefault();
        alert(`${titleProps.value} ${colorProps.value}`);
        resetTitle();
        resetColor()
    }
  return (
    <form onSubmit={submit}>
        <input type="text"
        {...titleProps} name="" id="" />
        <input type="color"
        {...colorProps} name="" id="" />
        <button>add</button>
    </form>
  )
}

export default CustomHook