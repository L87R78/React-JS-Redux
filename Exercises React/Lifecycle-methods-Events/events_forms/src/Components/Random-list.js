import React from 'react'

const RandomList = ({ randomList = [] }) => {
    console.log(randomList)
    return (
        < ul >
            {
                randomList.map((thing, index) => (<li key={index}>{thing}</li>))
            }
        </ul >
    )``
}

export default RandomList