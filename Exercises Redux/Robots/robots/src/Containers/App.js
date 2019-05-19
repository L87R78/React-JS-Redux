import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../Components/CardList";
//import { robots, cats } from './Data/robots';
import SearchBox from "../Components/searchBox";
import Scroll from "../Components/Scroll";

import "./App.css";

import { setSearchField, requestRobots } from '../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };

    //this.onSearchChange = this.onSearchChange.bind(this);
  }

    onSearchChange(event) {
      this.setState({ saerchFields: event.target.value });
    }

  render() {
  
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    let emptyRobots = true;
    if (emptyRobots) {
      if (filteredRobots.length === 0) {
        emptyRobots = <h2>There is no robots</h2>;
      }
    }
    return (
      <div className="tc">
        <h1>RoboFreinds</h1>
        <SearchBox searchChange={onSearchChange} />
        {emptyRobots}
        <Scroll>
         <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        //console.log(users)
        return this.setState({ robots: users });
      });
    //this.props.onRequestRobots()
  }
}

const mapToStateToProps = state => {
  return {
    searchField: state.searchFields,
    // robots: state.requestRobots.robots,
    // isPending: state.requestRobots.isPending,
    // error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    //onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(
  mapToStateToProps,
  mapDispatchToProps
)(App);
