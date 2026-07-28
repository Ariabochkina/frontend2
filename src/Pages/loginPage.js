import React, { Component } from 'react'
import { DEMO_PASSWORD } from '../demoRecipes'

function fetchAPI(event, param, callback) {
    event.preventDefault();
    fetch(param)
        .then(response => {
            callback(response.status === 200)
        })
        .catch(function () {
            // Без backend - демо-вход, чтобы можно было открыть UI локально
            callback(null)
        })
}

export class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = {password: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state.URL = props.APIUrl
    }
    handleChange(event){
        this.setState({password: event.target.value})
    }
    handleSubmit(ok){
        if (ok === true){
            window.open("home?password=" + encodeURIComponent(this.state.password), "_self")
            return
        }
        if (ok === null) {
            alert("Backend недоступен - открываем демо-режим.\nПароль: " + DEMO_PASSWORD)
            window.open("home?password=" + DEMO_PASSWORD, "_self")
            return
        }
        alert("Неверный пароль")
    }

    onSubmit(event) {
        event.preventDefault()
        // Явный демо-вход без запроса к API
        if (this.state.password === DEMO_PASSWORD || this.state.password === "") {
            if (this.state.password === "") {
                alert("Открываем демо-режим.\nПароль: " + DEMO_PASSWORD)
            }
            window.open("home?password=" + DEMO_PASSWORD, "_self")
            return
        }
        fetchAPI(event, this.state.URL + "/recipes?password=" + encodeURIComponent(this.state.password), this.handleSubmit)
    }

    render() {
        return (
            <form onSubmit={(event) => this.onSubmit(event)}>
                <label>
                    <h2>Введите пароль </h2>
                    <textarea value={this.state.password} onChange={this.handleChange} className='text-area'/>
                </label>
                <p style={{ fontSize: "0.9em" }}>
                    Без backend: пароль <code>{DEMO_PASSWORD}</code> или пустая форма - демо UI.
                </p>
                <input type='submit' value="Отправить" className='submit' />
            </form>
        )
    }
}

export default LoginPage
