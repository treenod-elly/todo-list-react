import React from "react"
import "./TodoList.scss"
import { BiCheckCircle, BiCircle } from "react-icons/bi"
const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => onToggle(todo.id)}
      onDoubleClick={() => onRemove(todo.id)}
    >
      <span>{todo.title}</span>
      {todo.completed ? <BiCheckCircle /> : <BiCircle />}
    </li>
  )
}

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="List">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
}

export default TodoList
