/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import store from './Reducers/calculatorApp';
import * as actions from './Reducers/actionsCreators';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0,
      value: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onUpadate = this.onUpadate.bind(this);
    
    store.subscribe(this.onUpadate);
  }

  onChange(e) {
    if(isNaN(e.target.value)) return;
    this.setState({ value: Number(e.target.value) });
  }
  onButtonClick(e) {
     const action = actions[e.target.name](this.state.value);
     store.dispatch(action);
     this.setState({
       value: ''
     });
  }
  onUpadate() {
    this.setState({ data: store.getState() });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.onChange} value={this.state.value}/>
        <button onClick={this.onButtonClick} name="subtract"> - </button>
        <button onClick={this.onButtonClick} name="add"> + </button>
        <button onClick={this.onButtonClick} name="multiply"> * </button>
        <button onClick={this.onButtonClick} name="divide"> / </button>

        <div>
          <p>{this.state.data}</p>
          <br/>
          <br/>
        </div>
         <p>another component with same result</p>
        < Display />

      </div>

    );
  }

  componentDidMount() {
    this.setState({ data: store.getState() })
  }
}
export default App;


