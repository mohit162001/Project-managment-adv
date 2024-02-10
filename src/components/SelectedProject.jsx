import React from 'react'
import '../styles/selectedproject.css'
import Button from './UI/Button.jsx'
import Task from './Task.jsx'
import { useDispatch } from 'react-redux'
import { projectActions } from '../project-store/projectSlice.js'
function SelectedProject({project}) {

  const dispatch = useDispatch()
  
  function handleDeleteProject(id){
    dispatch(projectActions.deleteProject(id))
  }

  
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
        <Task />
    </div>
  )

}

export default SelectedProject