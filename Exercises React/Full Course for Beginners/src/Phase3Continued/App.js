import React from 'react'

import TodosData from './TodosData'
import TodoItem from './TodoItem'

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            todos: TodosData
        }

        this.handledChange = this.handledChange.bind(this)
    }

    handledChange(name){
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
            
                if(todo.name === name){
                   todo.name = !todo.name
                }
                
                return todo
            })
            
            return{
                todos: updateTodos
            }
        })
    }

    render(){
        
        const TodoItems = TodosData.map(item => 
        <TodoItem  key={item.name} item ={item} handledChange={this.handledChange}/>)
        return(
            <div>
                {TodoItems}
            </div>  
        )
    }
}


export default App