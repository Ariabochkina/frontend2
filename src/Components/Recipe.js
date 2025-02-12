import React, { Component } from 'react'

export class Recipe extends Component {
    constructor(props){
        super(props)
        this.state = props.json
        this.state.update = props.update
        this.changeName = this.changeName.bind(this)
    }
    changeName(event){
        var prevState = this.state
        prevState.name = event.target.value
        this.setState(prevState)
        this.state.update()
    }
    render() {
        return (
        
            <label>
                <p>Имя рецепта</p>
                <textarea value={this.state.name} onChange={this.changeName}/>
                </label>
        
        )
    }
}

export default Recipe