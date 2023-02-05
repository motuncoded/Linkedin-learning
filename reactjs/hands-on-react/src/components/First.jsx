import React from 'react'
 const Welcome = (props) => {
    return (
        <div className='container'>
        <article>
            <hgroup>
        <h1>Meet the {props.name}</h1>
        <p>Members of an <b>intergalactic alliance</b><br />
        paving the way for peace and benevolence among all species. 
        They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className='outline' onClick={() => alert("hello")}>Click Me</button>
        </hgroup>
        </article>
        </div>
    )
 }
const First = () => {
    
    const name = "StarGazers";
  return (
    <div className='container'>
<article>
    <hgroup>
        <h1>Meets the <i style={{color:"steelblue"}}> {name}</i></h1>
        <p>Members of an <b>intergalactic alliance</b><br />
        paving the way for peace and benevolence among all species. 
        They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className='outline' onClick={() => alert("hello")}>Click Me</button>

    </hgroup>

</article>
<Welcome name="Aliens"/>

    </div>
  )
}

export default First