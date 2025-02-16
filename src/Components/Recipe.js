import React, { Component } from 'react'
import Taste from './Taste'
const showTastes = (props, onDelete) => {
    let ans = []
    for (let i = 0; i < props.json.tastes.length; i++) {
        ans.push(<Taste name={props.json.tastes[i]} key={i} onDelete={() => onDelete(i)}/>)
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
            </div>
        )
    }
}

export default Recipe