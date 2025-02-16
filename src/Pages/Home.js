import React, { Component } from 'react'
import Recipe from '../Components/Recipe'
const showRecipes = (props, onDelete) => {
    return (<div>
        {props.json.map(el => (
            <Recipe json={el} key={el.id} onDelete={() => onDelete(el.id)}/>
        ))}
    </div>)
}
export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {json: null}
        this.state.json = [{
            id: 0,
            name: "espresso", 
            tastes: ["bitter", "sour", "strong"],
            default_measures: {"ground_coffee": 18, "water": 36},
            change_coeficients: {"ground_coffee": {"bitter": 1}}
        }]        
        this.recipeAccess = []
        this.addRecipe = this.addRecipe.bind(this)
        this.deleteRecipe = this.deleteRecipe.bind(this)
       
    }
    deleteRecipe(key){  
        let prev = this.state
        prev.json = prev.json.filter(el => el.id !== key)
        this.setState(prev) 
    }
    addRecipe(){
        let prev = this.state
        let len = prev.json.length
        if (len === 0) {
            prev.json[len] = {
                id: 0,
                name: "", 
                tastes: [],
                default_measures: {},
                change_coeficients: {}}
        } else {
            prev.json[len] = {
                id: prev.json[len - 1].id + 1,
                name: "", 
                tastes: [],
                default_measures: {},
                change_coeficients: {}}
        }
        this.setState(prev)
    }
    render() {
        return (
        <div>
        <button onClick={this.addRecipe}>Добавить рецепт</button>
        <form>
            {showRecipes(this.state, this.deleteRecipe)}
            <input type='submit'></input>
        </form>
        </div>
        )
    }
}

export default Home