import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            initialCount: 0,
            isLoading: true,
        }
        console.log(props)
        console.log('class')
        this.decrement = this.decrement.bind(this);
        //this.increment = this.increment.bind(this);
    }

    static getDerivedStateFromProps(props, state){//няма достъп до this
        //това е мотод който трябва да върне state
        console.log('getDerivedStateFromProps')
        if(state.counter !== state.initialCount && props.initialCount === state.initialCount){
            return{
                counter: state.counter
            }
        }
        return{ 
            counter: props.initialCount,
            initialCount: props.initialCount
        };
    }

    decrement() {
        this.setState((prevState) => ({ counter: prevState.counter - 1}))
        // this.setState({
        //     counter: this.state.counter - 1
        // })
      
    }
    increment = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1}))
    }

    render() {
        console.log('render')
        const { isLoading } = this.state
        if(isLoading){
            return <div>Loading...</div>
        }

        return (
            <div>
                <h1>{this.state.counter}</h1>
                <br />
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>

        )
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.setState({
            isLoading: false
        })

        
    }
}

export default App