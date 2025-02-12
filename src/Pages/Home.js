import React, { Component } from 'react'
import Recipe from '../Components/Recipe'
export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.state.json = [{
            name: "espresso", 
            tastes: ["bitter", "sour", "strong"],
            default_measures: {ground_coffee: 18, water: 36},
            change_coeficients: {ground_coffee: {bitter: 1}
            }
        }]
        this.state.recipes = this.createRecipes()
        this.createRecipes = this.createRecipes.bind(this)
        this.update = this.update.bind(this)
    }
    update() {
        let prev = this.state
        prev.json = []
        for (let i = 0; i < this.state.recipes.length; i++) {
            prev.json[i] = this.state.recipes.state.json
        }
        this.setState(prev)
    }
    createRecipes(){
        var recipe = []
        for(let i = 0; i < this.state.json.length; i++){
            recipe[i] = (<Recipe json={this.state.json[i]} updateFather={this.update}/>)
        }
        return recipe
    }
    render() {
        return (
            <body>
        <button>Добавить рецепт{this.state.json[0].name}</button>
        <form>
            {this.state.recipes}
            <input type='submit'></input>
        </form>
        </body>
        )
    }
}

export default Home