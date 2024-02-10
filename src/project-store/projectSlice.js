import { createSlice } from "@reduxjs/toolkit";

const initialProjectState = {
  selectedProject: undefined,
  projects: [],
  tasks: [],
};

export const projectSlice = createSlice({
  name: "project-slice",
  initialState: initialProjectState,
  reducers: {
    addProject(state, action) {
      console.log('add')
      const projectId = Math.random();
      const newProject = {
        ...action.payload,
        id: projectId,
        tasks:[]
      };
      return{
        ...state,
        selectedProject: undefined,
        projects: [...state.projects, newProject],
      };
    },
  

  cancleAddProject(state) {
    return {
      ...state,
      selectedProject: undefined,
    };
  },

  deleteProject(state, action) {
    return{
      ...state,
      selectedProject: undefined,
      projects: state.projects.filter((project) => {
        return project.id !== action.payload;
      }),
    };
  },

  projectDisplay(state, action) {
    return{
      ...state,
      selectedProject: action.payload,
    };
  },

  currSelectedProject(state,action) {
    return {
      ...state,
      selectedProject: null,
    };
  },

  addTask(state, action) {
    if (action.payload !== "") {
      const taskId = Math.random();
      const newTask = {
        taskText: action.payload ,
        projectId: state.selectedProject,
        id: taskId,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }
  },

  deleteTask(state,action){
    return({
        ...state,
          tasks:state.tasks.filter((task)=>{
          return task.id !== action.payload;
        }),
      })
  }
}
});

export const projectActions = projectSlice.actions;
