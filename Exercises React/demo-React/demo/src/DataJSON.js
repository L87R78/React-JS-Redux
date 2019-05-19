import React from 'react'

function ContactCard(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.contact.id}</h2>
            <h2>{props.contact.name}</h2>
            <img className="image-size" src={props.contact.imageUrl} />
            <p>{props.contact.content}</p>
        </div>
    )
}


export default ContactCard