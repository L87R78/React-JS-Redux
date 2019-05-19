import React from 'react'

import todosData from './todosData'
import TodoItem from './TodoItem'

function App() {
    const todoItems = todosData.map(item => <TodoItem  key={item.name}   item ={item}/>)
    
    return(
        <div>
            {todoItems}
            
            {/* <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem /> */}
        </div>  
    )
}


export default App