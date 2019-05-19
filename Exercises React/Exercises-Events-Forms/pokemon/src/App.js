import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import SignUpForm from './Components/SignUpForm'
import LoginUpForm from './Components/LoginUpForm'
import LoggedInScreen from './Components/Logged-In/LoggedInScreen'

class App extends Component {
  constructor(props) {
    super(props)
    
    
    let route = ''
    if(localStorage.getItem('token')){
      route = 'LoggedIn'
    }
    this.state = {
      route: route,
      road: 'singUp',
      
    }
    this.ShowFirstAppComponent = this.ShowFirstAppComponent.bind(this)
    this.SwitchLoginSignUp = this.SwitchLoginSignUp.bind(this)
    this.setLogedIn = this.setLogedIn.bind(this)
  }

  ShowFirstAppComponent() {
    if (this.state.route === 'login') {
      return < LoginUpForm setLogedIn={this.setLogedIn}/>
    }
    else if(this.state .route === 'LoggedIn'){
      // <h2>Welcome {localStorage.userName}</h2>
      
      return  < LoggedInScreen />
    }
    return < SignUpForm />
    
  }

  setLogedIn(){
     this.setState({route: 'LoggedIn'})
  }

  SwitchLoginSignUp() {
    if (this.state.route === 'login') {
      return this.setState(
        {
          route: '',
          road: 'Login'
        }
      )
    }
    return this.setState(
      {
        route: 'login',
        road: 'SignUp'
      }
    )
  }

  render() {
    console.log('renderApp')
    const { road } = this.state
    if(this.state.route !== 'LoggedIn'){
      return (
      
        <div className="App wrapper">
          <button onClick={this.SwitchLoginSignUp} className="btn btn-primary">{road}</button>
          <br/>
          <br/>
          {this.ShowFirstAppComponent()}
        </div>
      );
    }
    return (
      <div className="App wrapper">
        {this.ShowFirstAppComponent()}
      </div>
    );
  }
}
export default App;
