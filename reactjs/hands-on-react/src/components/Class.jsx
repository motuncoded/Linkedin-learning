import React, { Component } from 'react'
import img from "../"

class Class extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='container'>
            <article>
                <hgroup>
<img src="../components/staraliens.jpg" alt="aliens"/>
                    <h1>Meets the <i style={{color:"steelblue"}}> {this.props.name}</i></h1>
                   
                    <p>Members of an <b>intergalactic alliance</b><br />
                    paving the way for peace and benevolence among all species. 
                    They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
                    <button className='outline' onClick={() => alert("hello")}>Click Me</button>
                </hgroup>
            </article>

                </div>
        )
    }
}
export default Class;
