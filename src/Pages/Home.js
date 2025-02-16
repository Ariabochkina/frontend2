import React, { Component } from 'react'
import Recipe from '../Components/Recipe'
export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {json: null, recipes: null, recipeAccess: []}
        this.state.json = [{
            name: "espresso", 
            tastes: ["bitter", "sour", "strong"],
            default_measures: {"ground_coffee": 18, "water": 36},
            change_coeficients: {"ground_coffee": {"bitter": 1}}
        }]
        
        
        this.recipeAccess = []
        this.createRecipes = this.createRecipes.bind(this)
        this.update = this.update.bind(this)
        this.addRecipe = this.addRecipe.bind(this)
        this.deleteRecipe = this.deleteRecipe.bind(this)
        for (var i = 0; i < this.state.json.length; i++) {
            this.state.recipeAccess[i] = React.createRef()
        }
        this.state.recipes = []
        for (var i = 0; i < this.state.json.length; i++){
            this.state.recipes[i] = (<Recipe ref={this.state.recipeAccess[i]} json={this.state.json[i]} key={i} father={this}/>)
        }
       
    }
    update() {
        let prev = this.state
        this.createRecipes()
        prev.json = []
        for (let i = 0; i < this.state.recipes.length; i++) {
            let currentEditor = this.state.recipeAccess[i].current
            prev.json[i] = currentEditor.state.json
        }
        this.setState(prev)
    }
    createRecipes(){
        let prev = this.state
        for (var i = 0; i < prev.json.length; i++) {
            prev.recipeAccess[i] = React.createRef()
        }
        prev.recipes =[]
        for(let i = 0; i < prev.json.length; i++){
            prev.recipes[i] = (<Recipe ref={prev.recipeAccess[i]} json={prev.json[i]} key={i} father={this}/>)
        }
        this.setState(prev)
    }
    deleteRecipe(i){
        let prev = this.state
        prev.json.revome(i)
        this.setState(prev)
        this.update()
    }
    addRecipe(){
        let prev = this.state
        prev.json[this.state.json.length] = [{name: "", 
            tastes: [],
            default_measures: {},
            change_coeficients: {}}]
        this.setState(prev)
        this.update()
    }
    render() {
        return (
        <div>
        <button onClick={this.addRecipe}>Добавить рецепт</button>
        <form>
            {this.state.recipes}
            <input type='submit'></input>
        </form>
        </div>
        )
    }
}

export default Home