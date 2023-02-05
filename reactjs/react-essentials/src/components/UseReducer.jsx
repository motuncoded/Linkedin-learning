import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    const [checked, setChecked] = useState(false);
    const [check, setCheck] = useState(false);
    const [checking, setChecking] = useReducer(
        (checking) =>!checking,
         false
    )

  return (
    <div>
        <input type="checkbox" value={checked} name="" id=""  onChange={()=> setChecked(!checked)}/>
        <label>{checked ? "checked" : "not checked"}</label>

        <input type="checkbox" value={check} name="" id=""  onChange={()=> setCheck((check) => !check)}/>

        <label>{check ? "checked" : "not checked"}</label>
        <input type="checkbox"
        value={checking} 
        onChange={setChecking}
        name="" id="" />
                <label>{checking ? "checked" : "not checked"}</label>

    </div>
  )
}

export default UseReducer
