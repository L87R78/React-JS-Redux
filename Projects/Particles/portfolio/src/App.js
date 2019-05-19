import React, { Component, Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import './App.css';

//import imageBackGroud from './Static/backGroundImage';

const NavBar = lazy(() => import('./Views/navBar'));
const AboutMe = lazy(() => import('./Views/aboutMe'));
const Projects = lazy(() => import('./Views/projects'));
const Contact = lazy(() => import('./Views/contact'));
const NotFound = lazy(() => import('./Views/notFound'));


class App extends Component {
  render() {
    console.log('App')
    return (
      <Fragment>
        
        <Router>
          <Suspense fallback={<span>Loading...</span>}>
          {/* < NavBar /> */}
          {/* <Switch>
              <Route exact тpath="/test" component={NavBar} component={NavBar}/>
              <Route exact path="/AboutMe" component={AboutMe} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Contact" component={Contact} />

              <Route component={NotFound} />
            </Switch> */}
            <Route exact path="/all" component={NavBar} />
          
          </Suspense>
        </Router>
      </Fragment>
    )
  }
}
export default App;
