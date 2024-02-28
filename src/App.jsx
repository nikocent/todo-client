import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
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
    <ul className="list">
      {todos.length === 0 && "Vacío"}
      {todos.map(e => {
        return <li key={e.id}>
        <label>
          <input type="checkbox" checked={e.checked} onChange={e => toggleTodo(e.id, e.target.checked)} />
          {e.title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(e.id)}>Delete</button>
      </li>
      })}
    </ul>
    </>
  )
}