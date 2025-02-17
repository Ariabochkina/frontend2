import React, { Component } from 'react'
import Taste from './Taste'
import Ingredients from './Ingredients'
const showTastes = (props, onDelete) => {
    let ans = []
    for (let i = 0; i < props.json.tastes.length; i++) {
        ans.push(<Taste name={props.json.tastes[i].name} key={props.json.tastes[i].id} onDelete={() => onDelete(props.json.tastes[i].id)}/>)
    }
    return (<div>
        {ans}
    </div>)
}
const showMeasures = (props, onDelete) => {
    let ans = []
    for (let i = 0; i < props.json.default_measures.length; i++) {
        let cur = props.json.default_measures[i]
        ans.push(<Ingredients name={cur.name} value={cur.value} key={cur.id} onDelete={() => onDelete(cur.id)}/>)
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
        prev.json.tastes = prev.json.tastes.filter(el => el.id !== key)
        this.setState(prev) 
    }
    addTaste(){
        let prev = this.state
        if (prev.json.tastes.length === 0) {
            prev.json.tastes.push({"id": 0, "name": ""})
        }
        else {
            let ind = prev.json.tastes[prev.json.tastes.length - 1].id + 1
            prev.json.tastes.push({"id": ind, "name": ""})
        }
        this.setState(prev)
    }
    deleteIngredient(key){  
        let prev = this.state
        prev.json.default_measures = prev.json.default_measures.filter(el => el.id !== key)
        this.setState(prev) 
    }
    addIngredient(){
        let prev = this.state
        if (prev.json.default_measures.length === 0) {
            prev.json.default_measures.push({"id": 0, "name": "", "value": 0})
        }
        else {
            let ind = prev.json.default_measures[prev.json.default_measures.length - 1].id + 1
            prev.json.default_measures.push({"id": ind, "name": "", "value": 0})
        }
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
            <p>Ингредиенты</p>
            {showMeasures(this.state, this.deleteIngredient)}
            <button onClick={this.addIngredient}>Добавить ингредиент</button>
            </div>
        )
    }
}

export default Recipe