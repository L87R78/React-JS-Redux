import React from 'react';


const ShowPokemons = props => (
    <div>
        <h1>{props.item.pokemonNameeeeee}</h1>
        <span>{props.item.info}</span>
        <img src={props.item.image}></img>
    </div>
)


export default ShowPokemons;