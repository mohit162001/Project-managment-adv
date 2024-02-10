import React, { useState } from "react";
import "../styles/sidebar.css";
import Button from "./UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../project-store/projectSlice";
import ProjectFilter from "./ProjectFilter";
function SideBar() {
  const [isYear, setYear] = useState();
  let projectsArr = useSelector((state) => state.project.projects);
  let filterProjects = [];
  console.log(isYear);
  if (isYear) {
    filterProjects = projectsArr.filter((project) => {
      const date = new Date(project.duedate);
      // console.log(date)
      const year = date.getFullYear();

      return year === Number(isYear);
    });
  }
  let project = projectsArr;
  if (filterProjects.length>0) {
    project = filterProjects;
  }
  if(isYear && filterProjects.length===0){
    projectsArr = null
  }
  const dispatch = useDispatch();
  function handleSelectedProject() {
    dispatch(projectActions.currSelectedProject());
  }
  function handleProjectDisplay(id) {
    dispatch(projectActions.projectDisplay(id));
  }
  function onChangeFilter(year) {
    setYear(year);
  }
  if(isYear==='select'){
    setYear()
  }

  console.log(filterProjects);
  return (
    <aside>
      <h2>Your Projects</h2>
      <div className="sidebar-btn">
        <Button onClick={handleSelectedProject}>Add Project</Button>
        <ProjectFilter
          onChangeFilter={onChangeFilter}
          className="project-filter"
        />
      </div>
      <div>
        { projectsArr ===null ?(
          <p className="sidebar-message">No result found</p>
        ) : (
          <ul>
            {project.map((project) => {
              return (
                <li key={project.id}>
                  <button
                    onClick={() => handleProjectDisplay(project.id)}
                    className="project-btn"
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}

export default SideBar;
