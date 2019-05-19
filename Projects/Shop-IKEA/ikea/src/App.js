import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Common/Header/header';

import HomePage from './Components/Home/homePage';
import CreatePage from './Components/Create/createPage';
import DetailsPage from './Components/Details/detailsPage';
import ProfilePage from './Components/Profile/profilePage';
import NotFoundPage from './Components/Common/NotFound/notfoundPage';

import Login from './Components/Auth/LoginPage';
import Register from './Components/Auth/RegisterPage';


import Footer from './Components/Common/Footer/footer';

import  { furniture }   from './Data/data.json';
//console.log(furniture)

class App extends Component {
  render() {
    console.log(sessionStorage)
    if(sessionStorage.length > 0){
      
    }
    return (
      <div className="App">
        < Header />
        <main>
          <Switch>
            <Route exact path="/" render={() => <HomePage furnirure={furniture}/>} />
            <Route path="/create" component={CreatePage} />
            <Route path="/details/:id" component={DetailsPage} />
            <Route path="/profile" component={ProfilePage} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="*" component={NotFoundPage} />

          </Switch>
        </main>
        < Footer />
      </div>
    );
  }
}

export default App;
