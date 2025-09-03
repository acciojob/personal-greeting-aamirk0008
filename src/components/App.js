
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState('')

  const handleInput = (e) => {
    let value = e.target.value
    setTask(value)
  }
  return (
    <div>
    <input value={task} type='text' onChange={handleInput} placeholder="Enter Name"/>
    {task ? <p>Hello, {task}!</p> : null}
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
