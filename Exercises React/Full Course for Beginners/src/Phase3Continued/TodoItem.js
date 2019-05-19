import React from 'react'

function TodoItem(props){
    return(
        <div>
            <input 
                type="checkbox"
                onChange={() => props.handledChange(props.item.name)}
            />
        
            <p>{props.item.name}</p>
        </div>
    )
}


export default TodoItem

