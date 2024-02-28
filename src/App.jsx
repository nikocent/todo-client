import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    setTodos((current) => 
      [...current, 
      {id: crypto.randomUUID(),
      title: newItem,
      completed: false
      }
    ]
    )
    setNewItem("");
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
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1>To do list</h1>
    <ul className="list">
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