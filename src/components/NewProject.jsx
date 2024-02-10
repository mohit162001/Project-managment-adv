import React, { useRef } from 'react'
import Input from '../components/UI/Input.jsx';
import '../styles/newproject.css'
import Modal from './UI/Modal.jsx';
import { useDispatch } from 'react-redux';
import { projectActions } from '../project-store/projectSlice.js';
function NewProject({handleAddProject}) {

  const dispatch = useDispatch()
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleCancle(){
    dispatch(projectActions.cancleAddProject())
  }
  
  function onSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
  
    if(enteredTitle===''||enteredDescription===''||enteredDueDate===''){
       modal.current.open();
       return;
    }

    const project ={
      title:enteredTitle,
      description:enteredDescription,
      duedate:enteredDueDate
    }
    dispatch(projectActions.addProject(project))
  }
  

  return (
    <>
    <Modal ref={modal} buttonCaption={'Okay'}>
      <h2 id='modal-h2'>Ivaild Input</h2>
      <p id='modal-p1'>Please provide every input field</p>
    </Modal>
    <div className='project-container'>
        <menu>
            <li><button onClick={handleCancle} id='cancle-btn'>Cancle</button></li>
            <li><button onClick={onSave} id='save-btn'>Save</button></li>
        </menu>
        <div>
         <Input ref={title} label='Title'/>
         <Input ref={description} label='Description' textarea/>
         <Input type='date' ref={dueDate} label='Due Date'/>
        </div>
    </div>
    </>
  )
}

export default NewProject