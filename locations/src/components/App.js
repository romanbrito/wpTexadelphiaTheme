import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Main from './Main'
import logo from '../logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    )
  }
}

export default App
