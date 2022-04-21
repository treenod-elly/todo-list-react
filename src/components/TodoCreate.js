import React, { useState } from "react"
import TodoInput from "./TodoInput"
import "./TodoCreate.scss"

const TodoCreate = ({ addTodo }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className="CreateButton">
        <div onClick={() => setIsShow(true)}>+</div>
      </div>
      {isShow && <TodoInput addTodo={addTodo} setIsShow={setIsShow} />}
    </>
  )
}

export default TodoCreate
