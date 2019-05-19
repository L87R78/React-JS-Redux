import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../Components/CardList';
//import { robots, cats } from './Data/robots';
import SearchBox from '../Components/searchBox';
import Scroll from '../Components/Scroll';
import { setSearchField } from '../actions';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
        }
    }

    render() {
        const { robots } = this.state;
        const test = this.props.kur.searchField;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(test.toLowerCase());
        })
        let noRobots = true
        if (noRobots) {
            if (filteredRobots.length === 0) {
                noRobots = <h2>There is no robots</h2>
            }
        }
        return (
            <div className="tc">
                <h1>RoboFreinds</h1>
                < SearchBox searchChange={this.props.onSearchShange} />
                {noRobots}
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

}

const mapStateToProps = state => {
    //return console.log(state)
    return {
        kur: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchShange: (event) => dispatch(setSearchField(event.target.value))
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(App);