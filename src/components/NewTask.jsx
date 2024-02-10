import React, { useState } from 'react'
import '../styles/newtask.css'
import Button from './UI/Button.jsx'
import { useDispatch } from 'react-redux';
import { projectActions } from '../project-store/projectSlice.js';

function NewTask() {

    const [taskInput,setTaskInput] = useState('');
    const dispatch = useDispatch();
    function handleInput(event){
        setTaskInput(event.target.value);
    }
    function handleInputField(){
        dispatch(projectActions.addTask(taskInput));
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