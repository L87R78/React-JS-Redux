
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import './App.css';
import * as actions from './calculator/actionsCreators';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: 0,
      value: 0
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClickButton(e) {
    this.props.calculatorAactions[e.target.name](this.state.value);
    //this.props[e.target.name](this.state.value);

    this.setState({ value: '' });
  }

  onChange(e) {
    this.setState({ value: Number(e.target.value) });
  }

  render() {
    console.log(this.props.test)

    return (
      <div className="App">
        <input type="text" value={this.state.value} onChange={this.onChange} />
        <div>
          <button onClick={this.onClickButton} name="add">+</button>
          <button onClick={this.onClickButton} name="subtract">-</button>
          <button onClick={this.onClickButton} name="multiply">*</button>
          <button onClick={this.onClickButton} name="divide">/</button>
          <br />
          {this.props.test}
        </div>
        <h2>redux</h2>
        <ul>
          {this.props.comments.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapToStateToProps(props) {
  return {
    test: props.calculator,
    comments: props.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    calculatorAactions: bindActionCreators(actions, dispatch)

    //or this solve

    //add: (value) => dispatch(actions.add(value)),
    //subtract: (value) => dispatch(actions.subtract(value)),
    //multiply: (value) => dispatch(actions.multiply(value)),
    //divide: (value) => dispatch(actions.divide(value))
  }
}
export default connect(mapToStateToProps, mapDispatchToProps)(App);



