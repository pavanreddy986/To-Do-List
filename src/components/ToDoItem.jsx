
function ToDoItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;