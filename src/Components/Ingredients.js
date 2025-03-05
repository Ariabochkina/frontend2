import React, { Component } from 'react'

export class Ingredients extends Component {
    constructor(props){
        super(props)
        this.state = {json: props.json}
        this.state.id = props.id
        this.state.onDelete = props.onDelete
        this.state.onSomethingChanged = props.onSomethingChanged
        this.changeName = this.changeName.bind(this)
        this.changeValue = this.changeValue.bind(this)
    }
    changeName(event){
        var prevState = this.state
        prevState.json.name = event.target.value
        this.setState(prevState)
        this.state.onSomethingChanged(this.state.json)
    }
    changeValue(event){
        var prevState = this.state
        try {
            prevState.json.value = Number(event.target.value)
        }
        catch (e) {
            prevState.json.value = 0
        }
        if (isNaN(prevState.json.value)) {
            prevState.json.value = 0
        }
        this.setState(prevState)
        this.state.onSomethingChanged(this.state.json)
    }
    render() {
        return (
        <div>
            <button onClick={this.state.onDelete}>Удалить ингредиент</button>
            <textarea value={this.state.json.name} onChange={this.changeName}></textarea>
            <textarea value={this.state.json.value} onChange={this.changeValue}></textarea>
        </div>
        )
    }
}

export default Ingredients