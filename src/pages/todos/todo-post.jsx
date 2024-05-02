import React, { useState } from 'react';
import { Link } from 'wouter';
import todoContent from '../../assets/todo-content.json';
import pencil from '../../assets/pictures/icons/pencil.png'

import './todo.css'

function TodoPost() {
  let [content, setContent] = useState(todoContent)

  return (
    <div>
      {content.map((content, index) => (
        <div key={index} className='todo-post-container'>
            <h3>
              <span>
              <Link to={'/'+index} slug={todoContent[index]}>
                <img src={pencil} alt='arrowLeft' />
              </Link>
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
  );
}

export default TodoPost;