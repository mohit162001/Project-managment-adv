
import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelect from './components/NoProjectSelect';
import SideBar from './components/SideBar';
import SelectedProject from './components/SelectedProject';


function App() {
  const [projectState,setProjectState] = useState({
    selectedProject:undefined,
    projects:[],
    task:[]
  });
  
  function handleAddTask(text){
    if(text!==''){
      setProjectState((prevState)=>{
        const taskId = Math.random()
        const newTask = {
          taskText:text,
          projectId:prevState.selectedProject,
          id: taskId
        }
         return {
          ...prevState,
          task:[...prevState.task,newTask]
         }
      })
    }
  }
  function handleDeleteTask(id){
    setProjectState((prevState)=>{
      return ({
        ...prevState,
          task:prevState.task.filter((task)=>{
          return task.id !== id;
        }),
      })
    })
  }
  function handleSelectedProject(){
    setProjectState((prevState)=>{
      return ({
        ...prevState,
        selectedProject:null
      })
    })
  }
  
  function handleProjectDisplay(projectid){
      setProjectState((prevState)=>{
        return ({
          ...prevState,
          selectedProject:projectid
        })
      })
  }

  function handleCancle(){
    setProjectState((prevState)=>{
      return ({
        ...prevState,
        selectedProject:undefined
      })
    })
  }

  function handleDeleteProject(id){

    setProjectState((prevState)=>{
      return ({
        ...prevState,
        selectedProject:undefined,
        projects:prevState.projects.filter((project)=>{
          return project.id !== id;
        }),
      })
    })
  }
  function handleAddProject(projectData){
    
    setProjectState((prevState)=>{
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
       return {
        ...prevState,
        selectedProject:undefined,
        projects:[...prevState.projects,newProject]
       }
    })
  }

  const selectedProject = projectState.projects.find((project)=>{
      return project.id ===projectState.selectedProject;
  })


  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar handleSelectedProject={handleSelectedProject} projects={projectState.projects} handleProjectDisplay={handleProjectDisplay}/>
      {projectState.selectedProject === null ? <NewProject handleAddProject={handleAddProject} handleCancle={handleCancle}/>
      : projectState.selectedProject === undefined 
      ? <NoProjectSelect handleSelectedProject={handleSelectedProject}/> 
      : <SelectedProject tasks={projectState.task} project={selectedProject} handleDeleteProject={handleDeleteProject} handleTask={handleAddTask} handleDeleteTask={handleDeleteTask}/> 
    }
    </main>
  );
}

export default App;
