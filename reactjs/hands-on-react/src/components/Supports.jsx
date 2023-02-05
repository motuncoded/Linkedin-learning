import { useState, useEffect } from "react";


const pageTitle = document.title;

export default ()=>{
    
    const [count, setCount] = useState(0);
    const [counting, setCounting] = useState(0);
    const [counter, setCounter] = useState(0);

useEffect(() => {
if (count > 0){
    document.title = `${pageTitle}--${count}`;

}
})
useEffect(()=>{
    counting && (document.title= `${pageTitle} - ${count}`)
})


    return(
        <div className="container">
    <button className="outline" onClick={()=> alert("Hi there")}>Click Me</button>
        <button className="outline" onClick={() => setCount(count + 1)}> count {count}</button>
        <button className="outline" onClick={() => setCounting(counting + 1)}> 
        {(() => {
                if (count === 0 ){
                    return "click to support";

                }  else{
                    return `Supported ${counting} times`;
                }
            })()}
        </button>
        <button className="outline" onClick={() => setCounter(counter + 1)} >{count === 0 ? "click" : "Supported"}</button>

        </div>
    )
}