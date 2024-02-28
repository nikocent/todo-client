import { Todoitem } from "./TodoItem"

export function Todolist({todos, toggleTodo, deleteTodo}) {
    return (
        <>
        <ul className="list">
        {todos.length === 0 && "Vacío"}
        {todos.map(e => {
            return (
                <Todoitem {...e} key={e.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
        })}
        </ul>
      </>
    )
}