import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onTaskSelect }) => {
  return (
    <div className="task-grid">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onView={onTaskSelect} />
      ))}
    </div>
  );
};

export default TaskList;
