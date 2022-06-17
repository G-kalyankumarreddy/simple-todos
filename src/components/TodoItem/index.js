import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {id, title} = todoList

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        {' '}
        Delete{' '}
      </button>
    </li>
  )
}

export default TodoItem
