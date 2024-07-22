import React from 'react';

function Todo({ todo, index, markComplete, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <button onClick={() => markComplete(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
