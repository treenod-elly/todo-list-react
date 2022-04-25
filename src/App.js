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
  const onCreate = (title) =>
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title,
        completed: false,
      },
    ])
  const onToggle = (id) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))

  const onRemove = (id) => setTodos(todos.filter((todo) => todo.id !== id))

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=1")
      setTodos(result.data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <TodoDate />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoCreate onCreate={onCreate} />
    </div>
  )
}

export default App
