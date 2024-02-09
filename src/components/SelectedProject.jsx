import React from 'react'
import '../styles/selectedproject.css'
import Button from './UI/Button.jsx'
import Task from './Task.jsx'
function SelectedProject({project,handleDeleteProject,handleTask ,handleDeleteTask,tasks}) {

  const formattedDate = new Date(project.duedate).toLocaleString('default',{
    day:'2-digit',
    month:'short',
    year:'2-digit'
  })
  
  return (
    <div className='selectedproject-container'>
        <header className='selectedproject-header'>
        <div className='selected-project-indiv'>
            <h1 className='selectedproject-h1'>{project.title}</h1>
            <Button onClick={()=>handleDeleteProject(project.id)} >DELETE</Button>
        </div>
        <p className='selectedproject-p1'>{formattedDate}</p>
        <p className='selectedproject-p2'>{project.description}</p>
        </header>
        <Task tasks={tasks} handleTask={handleTask} handleDeleteTask={handleDeleteTask}/>
    </div>
  )

}

export default SelectedProject