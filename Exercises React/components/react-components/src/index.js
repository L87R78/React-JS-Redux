import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getPeople } from './services/star-war-services'


class StarWarPeopleList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            isLoading: true
        }
    }

    render() {
        const { people, isLoading } = this.state;
        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <ul>
                {
                    people.map(person => {
                        return <li>{person.name}</li>
                    })
                }
            </ul>
        )
    }
    componentDidMount() { //lifecycle method вика се само веднъж след като първия път се е извикал render
        getPeople()
            .then((people) => {
                this.setState({
                    people: people,
                    isLoading: false
                })
            });
    };

};



ReactDOM.render(
    <StarWarPeopleList />,

    document.getElementById('root'));

