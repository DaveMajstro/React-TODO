import React from 'react';

const TaskItem = ({ title, onDelete }) => {
  return (
    <li className="TaskItem">
      <p>
      {title}
      </p>
      <span className="deleteTask" style={{ cursor: 'pointer', color: 'red'}} onClick={onDelete}>
      &#x2718;
      </span>
    </li>
  );
};

export default TaskItem;