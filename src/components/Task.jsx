import React from 'react'
import '../styles/task.css'
import NewTask from './NewTask'
import { useDispatch, useSelector } from 'react-redux'
import { projectActions } from '../project-store/projectSlice'
function Task() {
  const tasks = useSelector(state=>state.project.tasks)
  const disptach = useDispatch();

  function handleDeleteTask(taskid){
      disptach(projectActions.deleteTask(taskid))
  }
    console.log(tasks)
  return (
    <section>
        <h2 id='task-h2'>Tasks</h2>
        <NewTask/>
        {tasks.length === 0 ?<p id='task-p'>This project does not have any task yet</p>:''}
        {tasks.length>0?<ul id='task-ul'>
        {tasks.map((task)=>{
            return <span key={task.id} id='task-span'>
            <li id='task-li' >{task.taskText}</li>
            <button id='task-btn' onClick={()=>handleDeleteTask(task.id)}>Clear</button>
            </span>
        })}
        </ul>:''}
    </section>
  )
}

export default Task