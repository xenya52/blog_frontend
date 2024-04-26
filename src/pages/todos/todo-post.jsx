import React, { useState } from 'react';
import todoContent from '../../assets/todo-content.json';
import arrowLeft from '../../assets/pictures/icons/arrowLeft.png'

import './todo.css'

function TodoPost() {
  let [content, setContent] = useState(todoContent)

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
                <button className='button-default'>Status</button> 
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
  const handleChecked = (i) => {
    setContent(content.slice(i))
    console.log("checked")
    
  }

  return (
    <ShowContent />
  );
}

export default TodoPost;