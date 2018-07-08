import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div id="app">
            <h3>Hello React!</h3>
            <p>you can start react project</p>
        </div>
    }
}

render(<App />, document.querySelector('#root'));