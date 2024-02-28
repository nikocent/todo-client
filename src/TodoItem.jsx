export function Todoitem({checked, id, title, toggleTodo, deleteTodo}) {
    return (
    <li>
        <label>
        <input type="checkbox" checked={checked} onChange={e => toggleTodo(e.id, e.target.checked)} />
        {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
    )
}