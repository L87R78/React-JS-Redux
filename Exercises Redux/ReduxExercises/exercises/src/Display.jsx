import React, { Component } from 'react';
import store from './Reducers/calculatorApp';

export default class Display extends Component {
    constructor(props){
        super(props)

        this.state = {
            storeData: 0,
        };

        this.onChange = this.onChange.bind(this);
        store.subscribe(this.onChange);
    }

    onChange(){
        this.setState({
            storeData: store.getState()
        });
    }


    render(){
        return(
            <p>{this.state.storeData}</p>
        )
    }

    componentDidMount() {
        this.setState({
          storeData: store.getState(),
        })
      }
}

