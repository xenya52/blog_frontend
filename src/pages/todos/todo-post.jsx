import React from 'react';
import todoContent from '../../assets/todo-content.json';

function TodoPost() {
  return (
    <div>
      {todoContent.map((content, index) => (
        <div key={index}>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoPost;