import React, { Component } from 'react';

class Bar extends Component {
    //Callback correct solve without ref
    render() {
        console.log('Bar Render')
        const { name, changeName } = this.props
        return (
            <div>
                {name}
                <button onClick={changeName}>Click me</button>
            </div>
        )
    }
}

class Foo extends Component {
    state = {
        name: 'lubomir'
    }
    changeName = () => {
        this.setState({
            name: 'Pesho'
        })
    }
    render() {
        console.log('Foo Render')
        const { name } = this.state
        return (
            < Bar name={name} changeName={this.changeName} />
        )

    }
}
export default Foo