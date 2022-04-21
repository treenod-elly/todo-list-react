import React from "react"
import "./TodoDate.scss"
import moment from "moment"

const TodoDate = () => {
  const date = moment().format("YYYY MMM DD dddd").split(" ")
  return (
    <div className="Date">
      <div>
        <p className="date">{date[2]}</p>
        <div>
          <p>{date[1]}</p>
          <p className="year">{date[0]}</p>
        </div>
      </div>
      <div>{date[3]}</div>
    </div>
  )
}

export default React.memo(TodoDate)
