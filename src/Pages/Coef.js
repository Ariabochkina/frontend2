import React, { Component } from 'react'
import RecipeCoefs from '../Components/RecipeCoefs'
function showRecipesCoefs(props) {
    return (<div>
        {props.json.map(el => (
            <RecipeCoefs json={el} key={el.id}/>
        ))}
    </div>)
}
export class Coef extends Component {
    constructor(props){
        super(props)
        this.state = {json: null}
        this.state.json = [{
            id: 0,
            name: "espresso", 
            tastes: [{id: 0, name: "bitter"}, {id: 1, name: "sour"}, {id: 2, name: "strong"}],
            default_measures: [{id: 0, name: "ground_coffee", value: 18}, {id: 1, name: "water", value: 36}],
            change_coeficients: [{id: 0, name: "ground_coffee", tastes: [{id: 0,name: "bitter", value: 1}]}]
        }]
    }    
    render() {
        return (
            <div>
                {showRecipesCoefs(this.state)}
                <form>
                    <input type="submit"    />
                </form>
            </div>
        
        )
    }
}

export default Coef