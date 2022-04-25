import React, { useState } from "react"
import "./TodoInput.scss"

const TodoInput = ({ onCreate, setIsShow }) => {
  const [input, setInput] = useState("")
  return (
    <div className="TodoCreate">
      <div className="modal">
        <div>
          <input type="text" value={input} onChange={({ target }) => setInput(target.value)} />
        </div>
        <button
          onClick={() => {
            onCreate(input)
            setInput("")
            setIsShow(false)
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default React.memo(TodoInput)
