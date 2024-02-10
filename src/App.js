import NewProject from "./components/NewProject";
import NoProjectSelect from "./components/NoProjectSelect";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  
  const newprojectState = useSelector((state) => state.project);
  const selectedProject = newprojectState.projects.find((project) => {
    return project.id === newprojectState.selectedProject;
  });
  
  return (
    <main>
      <SideBar />
      {newprojectState.selectedProject === null ? (
        <NewProject />
      ) : newprojectState.selectedProject === undefined ? (
        <NoProjectSelect />
      ) : (
        <SelectedProject
          project={selectedProject}
        />
      )}
    </main>
  );
}

export default App;
