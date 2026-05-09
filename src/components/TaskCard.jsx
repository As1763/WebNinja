import React from 'react';

const TaskCard = ({ task, onView }) => {
  const diffClass = `difficulty-${task.difficulty.toLowerCase()}`;

  return (
    <div className="task-card glass-panel">
      <div className="task-header">
        <span className="task-date">{task.date}</span>
        <span className={`task-difficulty ${diffClass}`}>{task.difficulty}</span>
      </div>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-desc">{task.description}</p>
      <button className="btn-view" onClick={() => onView(task)}>
        <span>View Task</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default TaskCard;
