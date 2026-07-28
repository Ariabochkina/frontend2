import React, { Component } from 'react'
import RecipeCoefs from '../Components/RecipeCoefs'
import { getDemoRecipes, getPasswordFromUrl, isDemoPassword } from '../demoRecipes'

function showRecipesCoefs(props, onSomethingChanged) {
    return (<div>
        {props.json.map(el => (
            <RecipeCoefs json={el} key={el.id} tastes={el.tastes} onSomethingChanged={onSomethingChanged}/>
        ))}
    </div>)
}
export class Coef extends Component {
    constructor(props){
        super(props)
        this.state = {json: []}

        this.somethingChanged = this.somethingChanged.bind(this)
        this.sendData = this.sendData.bind(this)
        this.loadData = this.loadData.bind(this)
    }
    componentDidMount() {
        this.loadData()
    }

    loadData(){
        const password = getPasswordFromUrl();
        if (isDemoPassword(password)) {
            this.setState({ json: getDemoRecipes() })
            return
        }
        fetch(this.props.APIUrl + "/recipes?password=" + encodeURIComponent(password))
            .then(response => {
                if (!response.ok) throw new Error("bad status")
                return response.json()
            })
            .then(json => {
                this.setState({json: json})
            })
            .catch(() => {
                this.setState({ json: getDemoRecipes() })
            })
    }
    somethingChanged(json) {
        let prev = this.state
        for (let i = 0; i < prev.json.length; i++) {
            if (prev.json[i].id === json.id) {
                prev.json[i] = json
                break
            }
        }
        this.setState(prev)
        console.log(JSON.stringify(this.state.json))
    }
    sendData(e) {
        e.preventDefault()
        const password = getPasswordFromUrl() || "demo";
        if (isDemoPassword(password)) {
            console.log("Demo save coefficients (нет backend):", this.state.json)
            alert("Демо-режим: коэффициенты собраны локально, на backend не отправляем.")
            return
        }
        fetch(this.props.APIUrl + "/recipes?password=" + encodeURIComponent(password), {
            method: "POST",
            body: JSON.stringify(this.state.json),
            headers: {
                "Content-Type": "application/json"
            }
          });

        console.log(JSON.stringify(this.state.json))
        window.open("/coef?password=" + encodeURIComponent(password), "_self")
    }
    render() {
        return (
            <div>
                {showRecipesCoefs(this.state, this.somethingChanged)}
                <form onSubmit={this.sendData}>
                    <input type="submit" className='submit' />
                </form>
            </div>

        )
    }
}

export default Coef
