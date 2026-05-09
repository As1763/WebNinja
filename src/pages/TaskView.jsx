import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';
import Header from '../components/Header';

function TaskView() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const snapshot = await get(ref(db, `tasks/${taskId}`));
        if (snapshot.exists()) {
          setTask({ id: taskId, ...snapshot.val() });
        }
      } catch (err) {
        console.error("Error fetching task:", err);
      }
      setLoading(false);
    };
    fetchTask();
  }, [taskId]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading task...</p>
        </div>
      </>
    );
  }

  if (!task) {
    return (
      <>
        <Header />
        <main>
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <h2>Task not found</h2>
            <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
              Go Back Home
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <div className="task-view-page">
      <Header />
      
      {/* Task Info Bar */}
      <div className="task-info-bar glass-panel">
        <div className="task-info-left">
          <button className="btn-back" onClick={() => navigate('/')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>
          <div className="task-info-details">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        </div>
        <div className="task-info-right">
          <span className="task-date">{task.date}</span>
          <span className={`task-difficulty difficulty-${task.difficulty.toLowerCase()}`}>
            {task.difficulty}
          </span>
        </div>
      </div>

      {/* Full Page HTML Preview */}
      <div className="task-preview-wrapper">
        <iframe
          srcDoc={task.content}
          title={task.title}
          className="task-preview-iframe"
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  );
}

export default TaskView;
