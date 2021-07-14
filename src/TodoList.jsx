import React from 'react'
import Todo from './Todo'
import './TodoList.css'

function TodoList({ todos, toggleTodo }) {
    return (
todos.map(todo => {
return <Todo className='todolistfi'key={todo.id} toggleTodo={toggleTodo} todo={todo} />
})

    )
}

export default TodoList
