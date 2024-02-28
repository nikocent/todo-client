import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { Todolist } from "./TodoList";
import "./styles.css"


export default function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((current) => 
          [...current, 
          {id: crypto.randomUUID(),
          title,
          completed: false
          }
        ]
        )
  }
  function toggleTodo(id, checked) {
    setTodos( current => {
      return current.map(e => {
        if (e.id === id) {
          return {...e, checked}
        }
        return e
      })
    })
  }

  function deleteTodo(id) {
    setTodos(current => {
      return current.filter(e => (e.id !== id))
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