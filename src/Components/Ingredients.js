import React, { Component } from 'react'

export class Ingredients extends Component {
    constructor(props){
        super(props)
        this.state = {name: props.name, value: props.value}
        this.state.id = props.id
        this.state.onDelete = props.onDelete
        this.changeName = this.changeName.bind(this)
    }
    changeName(event){
        var prevState = this.state
        prevState.name = event.target.value
        this.setState(prevState)
    }
    changeValue(event){
        var prevState = this.state
        prevState.value = event.target.value
        this.setState(prevState)
    }
    render() {
        return (
        <div>
            <button onClick={this.state.onDelete}>Удалить ингредиент</button>
            <textarea value={this.state.name} onChange={this.changeName}></textarea>
            <textarea value={this.state.value} onChange={this.changeValue}></textarea>
        </div>
        )
    }
}

export default Ingredients