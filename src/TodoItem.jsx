export function Todoitem({checked, tid, title, toggleTodo, deleteTodo}) {
    return (
    <li>
        <label>
        <input type="checkbox" checked={checked} onChange={e => toggleTodo(tid, e.target.checked)} />
            {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(tid)}>Delete</button>
    </li>
    )
}