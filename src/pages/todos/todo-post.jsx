import React, { useState } from 'react';
import todoContent from '../../assets/todo-content.json';
import arrowLeft from '../../assets/pictures/icons/arrowLeft.png'

import './todo.css'

function TodoPost() {
  let [content, setContent] = useState(todoContent)
  let [todoStatus, setTodoStatus] = useState("") //todo active / paused / done!
  
  let [statusDropdownMenu, setStatusDropdownMenu] = useState()
  let [isVisibleDropdown, setIsVIsibleDropdown] = useState(false)
  //TODO!!!
  const setVisiblityStatusDropdown = () => {
    setIsVIsibleDropdown(!isVisibleDropdown)
    if (isVisibleDropdown) {
      setStatusDropdownMenu(
        <div style={{backgroundColor:"#ffffff"}}>
          <a>todo</a>
          {console.log("click!")}
          <a>active</a>
          <a>paused</a>
          <a>done</a>
        </div>
      )
    }
    else{
      setStatusDropdownMenu(<></>)
    }
  }

  const ShowContent = () => {
    return(
      <div>
      {content.map((content, index) => (
        <div className='todo-post-container'>
            <h3>
              <span>
                {content.title}
              </span> 
              <span className='todo-post-right'>
                <button className='button-default' onClick={setVisiblityStatusDropdown}>Status</button>
                {statusDropdownMenu}
                <img src={arrowLeft} alt='arrowLeft' />
              </span>
              </h3>
            <p>{content.timestamp}</p>
          <hr />
        </div>
      ))}
      </div>
    )
  }

  return (
    <ShowContent />
  );
}

export default TodoPost;