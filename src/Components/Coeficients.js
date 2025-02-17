import React, { Component } from 'react'
function createOptions(avaliable_ingredients){
    let options = []
    for(let i = 0; i < avaliable_ingredients.length; i++){
        options[i] = (<option value={avaliable_ingredients[i]} className='options'>{avaliable_ingredients[i]}</option>)
    }
    return options
}
export class Coeficients extends Component {
    constructor(props){
        super(props)
        this.state = {name: props.name, tastes: props.tastes, avaliable_tastes: props.avaliable_tastes, avaliable_ingredients: props.avaliable_ingredients}
        this.state.id = props.id
        this.state.onDelete = props.onDelete
        this.changeName = this.changeName.bind(this)
    }
    changeName(event){
        var prevState = this.state
        prevState.name = event.target.value
        this.setState(prevState)
    }
    
    render() {
        return (
        <div>
            <button onClick={this.state.onDelete}>Удалить ингредиент</button>
            <label>Выберете ингредиент</label>
                <select value={this.state.name} onChange={this.changeName} className='select'>
                    {createOptions(this.state.avaliable_ingredients)}
                </select>
        </div>
        )
    }
}
export default Coeficients