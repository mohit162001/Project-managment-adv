import React from "react";

function ProjectFilter({onChangeFilter}) {
  function handleDropDown(event) {
    onChangeFilter(event.target.value);
  }
  return (
    <div className='project-filter'>
      <div className="project-filter__control">
        <select
          className="project-filter__select"

          onChange={handleDropDown}
        >
          <option value="filter">filter</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}

export default ProjectFilter;
