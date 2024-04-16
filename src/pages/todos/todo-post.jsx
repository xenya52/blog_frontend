import React, { useState } from 'react';
import todoContent from '../../assets/todo-content.json';

import './todo.css'

function TodoPost() {
  let [content, setContent] = useState(todoContent)

  const handleChecked = (i) => {
    setContent(content.slice(i))
  }

  return (
    <div>
      {todoContent.map((content, index) => (
        <div className='todo-post-container' key={index}>
          <div>
            <h3>
              <input type='checkbox'/>
              {content.title}
            </h3>
          </div>
          <p>{content.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoPost;