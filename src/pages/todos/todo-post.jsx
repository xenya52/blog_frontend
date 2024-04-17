import React, { useState } from 'react';
import todoContent from '../../assets/todo-content.json';

import './todo.css'

function TodoPost() {
  let [content, setContent] = useState(todoContent)

  const ShowContent = () => {
    return(
      <div>
      {content.map((content, index) => (
        <div className='todo-post-container' key={index}>
          <div>
            <h3>
              <input onChange={handleChecked} type='checkbox'/>
              {content.title}
            </h3>
          </div>
          <p>{content.description}</p>
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