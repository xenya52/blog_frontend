import React, { useState } from 'react';
import todoContent from '../../assets/todo-content.json';
import pencil from '../../assets/pictures/icons/pencil.png'

import './todo.css'

function TodoPost() {
  let [content, setContent] = useState(todoContent)
  const ShowContent = () => {
    return(
      <div>
      {content.map((content, index) => (
        <div key={index} className='todo-post-container'>
            <h3>
              <span>
              <img src={pencil} alt='arrowLeft' />
                {content.title}
              </span> 
              <span className='todo-post-right'>
                <select className='button-default'>
                  <option value="todo">todo</option>
                  <option value="active">active</option>
                  <option value="paused">paused</option>
                  <option value="done">done</option>
                </select>
              </span>
              </h3>
            <p>{content.timestamp}</p>
          <hr />
        </div>
      ))}
      </div>
    )
  }

  const editContent = (index) => {
    
  }

  return (
    <ShowContent />
  );
}

export default TodoPost;