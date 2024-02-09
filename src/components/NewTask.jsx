import React, { useState } from 'react'
import '../styles/newtask.css'
import Button from './UI/Button.jsx'

function NewTask({handleTask, handleDeleteTask}) {

    const [taskInput,setTaskInput] = useState('');

    function handleInput(event){
        setTaskInput(event.target.value);
    }
    function handleInputField(){
        handleTask(taskInput);
        setTaskInput('');
    }
  return (
    <div id='newtask-container'>
        <input id='newtask-input' type="text" value={taskInput}  onChange={handleInput} />
        <Button onClick = {handleInputField}>Add Task</Button>
    </div>
  )
}

export default NewTask;