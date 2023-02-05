import { Component } from "react";


const Eating = props => <h1>{props.meal}</h1>
class Menu extends Component{
    state ={
        meal:"spagheti"
    }
    /*constructor(props){
        super(props)
        this.state= {
            meal:"spagheti"
        }
        this.addMeal = this.addMeal.bind(this)
    }
        addMeal() {*/
        addMeal=()=>{
this.setState(prevState =>{
    return { meal:`${prevState.meal} and salad`}

           {/*this.setState({
           meal:"Spagetti and salad"*/}
            })
        
    }
    render(){
        return(
            <div>
            <Eating meal={this.state.meal}/>
            {(this.state.meal === "spagheti") ? <button onClick={this.addMeal}>Add meal</button> : null}
            </div>
        )
    }
}
export default Menu;