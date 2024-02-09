import React from 'react'
import '../styles/task.css'
import NewTask from './NewTask'
function Task({tasks,handleTask,handleDeleteTask}) {
    console.log(tasks)
  return (
    <section>
        <h2 id='task-h2'>Tasks</h2>
        <NewTask handleTask={handleTask} handleDeleteTask={handleDeleteTask}/>
        {tasks.length === 0 ?<p id='task-p'>This project does not have any task yet</p>:''}
        {tasks.length>0?<ul id='task-ul'>
        {tasks.map((task)=>{
            return <span key={task.id} id='task-span'>
            <li id='task-li' >{task.taskText}</li>
            <button id='task-btn' onClick={()=>handleDeleteTask(task.id)}>CLear</button>
            </span>
        })}
        </ul>:''}
    </section>
  )
}

export default Task