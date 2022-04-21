import logo from "./logo.svg"
import "./App.scss"
import TodoInput from "./components/TodoInput"
import { useEffect, useState } from "react"
import TodoList from "./components/TodoList"
import TodoDate from "./components/TodoDate"
import axios from "axios"
import TodoCreate from "./components/TodoCreate"

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
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=1")
      setTodos(result.data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <TodoDate />
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <TodoList todos={todos} />
      <TodoCreate addTodo={addTodo} />
    </div>
  )
}

export default App
