import React, { Component } from 'react'

export class Taste extends Component {
    constructor(props){
        super(props)
        this.state = {json: props.json}
        this.state.onDelete = props.onDelete
        this.state.onSomethingChanged = props.onSomethingChanged
        this.changeName = this.changeName.bind(this)
    }
    changeName(event){
        var prevState = this.state
        prevState.json.name = event.target.value
        this.setState(prevState)
        this.state.onSomethingChanged(this.state.json)
    }
    render() {
        return (
        <div>
            <button onClick={this.state.onDelete}>Удалить вкус</button>
            <textarea value={this.state.json.name} onChange={this.changeName}></textarea>
        </div>
        )
    }
}

export default Taste