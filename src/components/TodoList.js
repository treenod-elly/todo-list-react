import React from "react"
import { BiCheckCircle, BiCircle } from "react-icons/bi"
const TodoItem = ({ todo }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span>{todo.title}</span>
      {todo.completed ? <BiCheckCircle /> : <BiCircle />}
    </li>
  )
}

const TodoList = ({ todos }) => {
  return (
    <ul className="List">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default TodoList
