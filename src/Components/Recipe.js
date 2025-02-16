import React, { Component } from 'react'

export class Recipe extends Component {
    constructor(props){
        super(props)
        this.state = {json:null, father:null}
        this.state.json = props.json
        this.state.father = props.father
        this.state.onDelete = props.onDelete
        this.changeName = this.changeName.bind(this)
    }
    changeName(event){
        var prevState = this.state
        prevState.json.name = event.target.value
        this.setState(prevState)
    }
    render() {
        return (
        
            <label>
                <button onClick={this.state.onDelete}>Удалить рецепт</button>
                <p>Имя рецепта</p>
                <textarea value={this.state.json.name} onChange={this.changeName}/>
            </label>
        
        )
    }
}

export default Recipe