import React, { useState } from "react"
import TodoInput from "./TodoInput"
import "./TodoCreate.scss"

const TodoCreate = ({ onCreate }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className="CreateButton">
        <div onClick={() => setIsShow(true)}>+</div>
      </div>
      {isShow && <TodoInput onCreate={onCreate} setIsShow={setIsShow} />}
    </>
  )
}

export default TodoCreate
