import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Header username= "Lubomir"/>
                <Greeting />
            </div>
        )

    }
}

class Header extends Component {
    render() {
        return (
            <header>

                <h4>Welcome: {this.props.username}</h4>
            </header>
        )

    }
}
class Greeting extends Component {
    render() {

        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours <= 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }

        return (
            <h1 className="clock-color">Good {timeOfDay}</h1>
        )
    }
}




export default App








