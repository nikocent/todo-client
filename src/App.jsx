import { useEffect, useState } from "react"
import api from './api/axiosConfig'
import { NewTodoForm } from "./NewTodoForm";
import { Todolist } from "./TodoList";
import "./styles.css"


export default function App() {
  
  const [todos, setTodos] = useState(() => {
    localStorage
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });
  
  useEffect(() => {
    getTodos()
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]) //actua cada vez que se modifica el 2do param


  const getTodos = () => {
    api.get('/api/v1/todos')
    .then(response => {
      setTodos(response.data)
    })
    .catch(error => {
      console.error('Error fetcheando to-dos', error)
    })
  }

  function addTodo(title) {
    if (title.length > 100) {
      alert('El to-do no puede tener más de 100 caracteres')
      return
    }
    const newTodo = {
      tid: crypto.randomUUID(),
      title,
      completed: false
    }
    api.post('/api/v1/todos', newTodo)
    .then(() => {
      getTodos()
    })
    .catch(error => {
      console.error('Error agregando to-do', error)
    })
  }

  function toggleTodo(tid, checked) {
    api.put(`/api/v1/todos/${tid}`, {checked})
    .then(() => {
      getTodos()
    })
    .catch(error => {
      console.error('Error toggling to-do', error)
    })
  }

  function deleteTodo(tid) {
    api.delete(`/api/v1/todos/${tid}`)
    .then(() => {
      getTodos()
    })
    .catch(error => {
      console.error('Error eliminando to-do', error)
    })
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1>To do list</h1>
    <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}