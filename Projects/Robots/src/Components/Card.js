import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className='bg-light-green dib br6 pa9 ma2 grow bw2 shadow-65'>
            <img src={`https://robohash.org/${id}`}alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{[email]}</p>
            </div>
        </div>
    )
}

export default Card;