import React, { useEffect, useState, userEffect } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (tasks.length > 10) {
      alert('You have more than 10 tasks!');
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="todo-list-container">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder='Add a new task...'
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="tasks-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;