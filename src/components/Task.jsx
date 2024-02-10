import React from "react";
import "../styles/task.css";
import NewTask from "./NewTask";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../project-store/projectSlice";
function Task({ projectId }) {
  const projects = useSelector((state) => state.project.projects);
  const disptach = useDispatch();
  const selectedProject = projects.filter((project) => {
    return project.id === projectId;
  });
 
  function handleDeleteTask(taskid) {
    disptach(projectActions.deleteTask(taskid));
  }

  return (
    <section>
      <h2 id="task-h2">Tasks</h2>
      <NewTask />
      {selectedProject.tasks ===undefined ? (
        <p id="task-p">This project does not have any task yet</p>
      ) : (
        ""
      )}
      {(selectedProject[0].tasks && selectedProject[0].tasks.length > 0) ? (
        <ul id="task-ul">
          {selectedProject[0].tasks.map((task) => {

            return (
              <span key={task.id} id="task-span">
                <li id="task-li">{task.taskText}</li>
                <button id="task-btn" onClick={() => handleDeleteTask(task.id)}>
                  Clear
                </button>
              </span>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </section>
  );
}

export default Task;
