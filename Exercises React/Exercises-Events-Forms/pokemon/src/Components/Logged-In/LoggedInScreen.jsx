import React from 'react';

import AddPokemonForm from './AddForm';
import Pokemon from '../Logged-In/Pokemon';


class LoggedInScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokeArray: [],
        }

    }

    render() {
        const { afterSignUp, succses } = this.state;

        return (
            <div>
                < AddPokemonForm />

                {this.state.pokeArray.map(
                        pokemon => < Pokemon item={pokemon} />
                )}


            </div>
        )
    }
    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => {
                return data.json()
            })
            .then(response => {
                console.log('here')
                console.log(response)
                this.setState({
                    pokeArray: response.pokemonColection
                })
            })

    }
}
export default LoggedInScreen;