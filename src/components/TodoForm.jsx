import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTask, updateTask, currentTask, setCurrentTask }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    if (currentTask) {
      setText(currentTask.text);
      setPriority(currentTask.priority);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask({ ...currentTask, text, priority });
      setCurrentTask(null);
    } else {
      addTask({ text, priority });
    }
    setText('');
    setPriority('Medium');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
