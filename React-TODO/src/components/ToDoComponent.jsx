import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    if (taskTitle.trim() !== '') {
      setTasks([...tasks, taskTitle]);
      setTaskTitle('');
    }
  };

  const deleteTast = (index) => {
    const allTasks = [...tasks];
    allTasks.splice(index, 1);
    setTasks(allTasks);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className='TodoApp'>
      <h1>TODO Aplikace</h1>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTask}>Uložit úkol</button>
      <ul className="TaskAppList">
        {tasks.map((task, index) => (
          <TaskItem key={index} title={task} onDelete={() => deleteTast(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
