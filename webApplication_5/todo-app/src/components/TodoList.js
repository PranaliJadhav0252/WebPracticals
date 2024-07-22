import React, { useState } from 'react';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", isCompleted: false },
    { text: "Build a To-Do App", isCompleted: false },
  ]);

  const [value, setValue] = useState("");

  const addTodo = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
    setValue("");
  };

  const markComplete = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          markComplete={markComplete}
          removeTodo={removeTodo}
        />
      ))}
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
