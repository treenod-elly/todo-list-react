import React, { useState } from "react"

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("")
  return (
    <div className="TodoCreate">
      <div className="modal">
        <div>
          <input type="text" value={input} onChange={({ target }) => setInput(target.value)} />
        </div>
        <button
          onClick={() => {
            addTodo(input)
            setInput("")
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default React.memo(TodoInput)
