import React, { Component } from 'react'

export class Taste extends Component {
    constructor(props){
        super(props)
        this.state = {name: props.name}
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
            <button onClick={this.state.onDelete}>Удалить вкус</button>
            <textarea value={this.state.name} onChange={this.changeName}></textarea>
        </div>
        )
    }
}

export default Taste