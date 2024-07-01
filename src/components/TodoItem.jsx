import React from 'react';

const TodoItem = ({ task, deleteTask, editTask }) => {
  return (
    <li className="todo-item">
      <span>{task.text}</span>
      <span>Priority: {task.priority}</span>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
