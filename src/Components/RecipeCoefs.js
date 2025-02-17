import React, { Component } from 'react'
import Coeficients from './Coeficients'
const showCoeficients = (props, onDelete, avaliable_tastes, avaliable_ingredients) => {
    let ans = []
    for (let i = 0; i < props.json.change_coeficients.length; i++) {
        let cur = props.json.change_coeficients[i]
        ans.push(<Coeficients name={cur.name} tastes={cur.value} avaliable_tastes={avaliable_tastes}
             avaliable_ingredients={avaliable_ingredients} key={cur.id} onDelete={() => onDelete(cur.id)}/>)
    }
    return (<div>
        {ans}
    </div>)
}
export class RecipeCoefs extends Component {
    constructor(props){
        super(props)
        this.state = {json:null}
        this.state.json = props.json
        this.deleteCoeficients = this.deleteCoeficients.bind(this)
        this.addCoeficients = this.addCoeficients.bind(this)
    }
    deleteCoeficients(key){
        let prev = this.state
        prev.json.change_coeficients = prev.json.change_coeficients.filter(el => el.id !== key)
        this.setState(prev)
    }
    addCoeficients() {
        let prev = this.state
        let len = prev.json.change_coeficients.length
        prev.json.change_coeficients.push({
            id: len > 0 ? prev.json.change_coeficients[len - 1].id + 1 : 0,
            name: "",
            tastes: []
        })
        this.setState(prev)
    }
    avaliableIngredients(){
        let prev = this.state.json.default_measures
        let ans = []
        for(let i = 0; i < prev.length; i++){
            ans.push(prev[i].name)
        }
        return ans
    }
    avaliableTastes(){
        let prev = this.state.json.tastes
        let ans = []
        for(let i = 0; i < prev.length; i++){
            ans.push(prev[i].name)
        }
        return ans
    }
    render() {
        return (
        <div>
            <label>
                <p>Имя рецепта: {this.state.json.name}</p>
            </label>
            <p>Коэффиценты</p>
            <button onClick={this.addCoeficients}>Добавить</button>
            {showCoeficients(this.state, this.deleteCoeficients, this.avaliableTastes(), this.avaliableIngredients(), this.deleteCoeficients)}
        </div>
        )
    }
}

export default RecipeCoefs