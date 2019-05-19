import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <br />
                        <Link to="/about">About</Link>
                        <br />
                        <Link to="/footer">footer</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


const Home = () => {
    return (
        <h2>Home page</h2>
    )
}
const About = () => {
    return (
        <h2>About page</h2>
    )
}

const Footer = () => {
    return (
        <h2>Footer</h2>
    )
}
const Notfound = () => {
    return (
        <h2>There is no the droids you are looking for</h2>
    )
}

class AppWrapper extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    < NavBar />
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/about' component={About} />
                        <Route path='/footer' component={Footer} />
                        <Route component={Notfound} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}
export default AppWrapper




