import React, { Component } from 'react'
import './App.css'

import Slider from './components/Slider'
import Characters from './components/Characters/Characters'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focusedChar: 0
    }
      this.eventHandler = (newState) => {
      this.setState(newState)
    }
  }

  render() {
    return (
      <div className="App">
        < Slider /> 
        < Characters /> 
      </div>
    );
  }
}

export default App;



