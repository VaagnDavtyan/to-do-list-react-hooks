import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'



function App() {
const [todos, setTodos] = useState([])
const todoNameRef = useRef()

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])


function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}


function handleAddTodo (e){
const name = todoNameRef.current.value
if(name === '') return
setTodos(prevTodos => {
  return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
})
todoNameRef.current.value = null
}

function handleClearTodo(){
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}




  return (
<>

     <div className="container">
<div className="todo">
<div className="toptodo">
<input className="inputField" ref={todoNameRef} type='text' placeholder='Type Your Text...'/>
<button onClick={handleAddTodo}>Add Todo</button>
</div>
   <br/>
<div className='buttoncon'>
   <div className='displayleft'>{todos.filter(todo => !todo.complete).length} left to do </div>
<button className='clearbtn'onClick={handleClearTodo}>Clear Complited Todo</button>
</div>
   <div className='listcontainer'>
     <h3>To-Do</h3>
     <br/>
   <TodoList todos={todos} toggleTodo={toggleTodo}/>
   </div>
</div>
</div>
</>
  );
}

export default App;
