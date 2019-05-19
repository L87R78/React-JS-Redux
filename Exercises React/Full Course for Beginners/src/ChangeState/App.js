import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
        this.changeFunc = this.changeFunc.bind(this)
    }

    changeFunc() {
        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
        
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.changeFunc}>Change State</button>
            </div>
        )

    }
}
export default App








