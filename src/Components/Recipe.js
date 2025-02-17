import React, { Component } from 'react'
import Taste from './Taste'
import Ingredients from './Ingredients'
const showTastes = (props, onDelete) => {
    let ans = []
    for (let i = 0; i < props.json.tastes.length; i++) {
        ans.push(<Taste name={props.json.tastes[i]} key={i} onDelete={() => onDelete(i)}/>)
    }
    return (<div>
        {ans}
    </div>)
}
const showMeasures = (props, onDelete) => {
    let keys = Object.keys(props.json.default_measures)
    let ans = []
    for (let i = 0; i < keys.length; i++) {
        ans.push(<Ingredients name={keys[i]} value={props.json.default_measures[keys[i]]} key={keys[i]} onDelete={() => onDelete(i)}/>)
    }
    return (<div>
        {ans}
    </div>)
}
export class Recipe extends Component {
    constructor(props){
        super(props)
        this.state = {json:null}
        this.state.json = props.json
        this.state.onDelete = props.onDelete
        this.changeName = this.changeName.bind(this)
        this.addTaste = this.addTaste.bind(this)
        this.deleteTaste = this.deleteTaste.bind(this)
        this.addIngredient = this.addIngredient.bind(this)
        this.deleteIngredient = this.deleteIngredient.bind(this)
    }
    changeName(event){
        var prevState = this.state
        prevState.json.name = event.target.value
        this.setState(prevState)
    }
    deleteTaste(key){  
        let prev = this.state
        prev.json.tastes.splice(key, 1)
        this.setState(prev) 
    }
    addTaste(){
        let prev = this.state
        let len = prev.json.tastes.length
        prev.json.tastes[len] = ""
        this.setState(prev)
    }
    deleteIngredient(key){  
        let prev = this.state
        delete prev.json.default_measures[key]
        this.setState(prev) 
    }
    addIngredient(){
        let prev = this.state
        prev.json.default_measures[""] = 0
        this.setState(prev)
    }
    render() {
        return (
            <div>
            <label>
                <button onClick={this.state.onDelete}>Удалить рецепт</button>
                <p>Имя рецепта</p>
                <textarea value={this.state.json.name} onChange={this.changeName}/>
            </label>
            <p>Вкусы</p>
            {showTastes(this.state, this.deleteTaste)}
            <button onClick={this.addTaste}>Добавить вкус</button>
            <p>ингредиенты</p>
            {showMeasures(this.state, this.deleteIngredient)}
            <button onClick={this.addIngredient}>Добавить ингредиент</button>
            </div>
        )
    }
}

export default Recipe