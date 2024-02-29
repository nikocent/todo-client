import { Todoitem } from "./TodoItem"

export function Todolist({todos, toggleTodo, deleteTodo}) {
    return (
        <>
        <ul className="list">
        {todos.length === 0 && "Vacío"}
        {todos.map(e => {
            return (
                <Todoitem {...e} key={e.tid} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
        })}
        </ul>
      </>
    )
}