import React, { Component } from 'react'
import Recipe from '../Components/Recipe'
export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {json: null, recipes: null}
        this.state.json = [{
            name: "espresso", 
            tastes: ["bitter", "sour", "strong"],
            default_measures: {ground_coffee: 18, water: 36},
            change_coeficients: {ground_coffee: {bitter: 1}
            }
        }]
        
        this.createRecipes = this.createRecipes.bind(this)
        this.recipeAccess = []
        for (var i = 0; i < this.state.json.length; i++) {
            this.recipeAccess[i] = React.createRef()
        }
        this.update = this.update.bind(this)
        this.state.recipes = this.createRecipes()
    }
    update() {
        let prev = this.state.json
        prev.json = []
        for (let i = 0; i < this.state.recipes.length; i++) {
            let currentEditor = this.recipeAccess[i].current
            prev.json[i] = currentEditor.state.json
        }
        this.setState(prev)
    }
    createRecipes(){
        var recipe = []
        for(let i = 0; i < this.state.json.length; i++){
            recipe[i] = (<Recipe ref={this.recipeAccess[i]} json={this.state.json[i]} key={i} father={this}/>)
        }
        return recipe
    }
    render() {
        return (
        <div>
        <button>Добавить рецепт</button>
        <form>
            {this.state.recipes}
            <input type='submit'></input>
        </form>
        </div>
        )
    }
}

export default Home