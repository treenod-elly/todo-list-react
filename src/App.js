import logo from "./logo.svg"
import "./App.css"
import TodoInput from "./components/TodoInput"
import { useState } from "react"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (title) =>
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title,
        completed: false,
      },
    ])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  )
}

export default App
