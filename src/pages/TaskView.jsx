import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';

function TaskView() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showBar, setShowBar] = useState(true);

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

  // Auto-hide bar after 3 seconds
  useEffect(() => {
    if (!showBar) return;
    const timer = setTimeout(() => setShowBar(false), 4000);
    return () => clearTimeout(timer);
  }, [showBar]);

  if (loading) {
    return (
      <div className="fullscreen-loader">
        <div className="spinner"></div>
        <p>Loading task...</p>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="fullscreen-loader">
        <h2>Task not found</h2>
        <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="task-fullscreen">
      {/* Floating Back Button - always visible */}
      <button className="fab-back" onClick={() => navigate('/')} title="Back to Tasks">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      {/* Floating info pill - auto hides, reappears on hover over top */}
      <div 
        className={`floating-info ${showBar ? 'visible' : ''}`}
        onMouseEnter={() => setShowBar(true)}
      >
        <span className="fi-title">{task.title}</span>
        <span className={`task-difficulty difficulty-${task.difficulty.toLowerCase()}`}>
          {task.difficulty}
        </span>
      </div>

      {/* Hover zone to bring back the info bar */}
      <div className="top-hover-zone" onMouseEnter={() => setShowBar(true)} />

      {/* Full screen iframe - NO borders, NO padding, pure website feel */}
      <iframe
        srcDoc={task.content}
        title={task.title}
        className="fullscreen-iframe"
        sandbox="allow-same-origin"
      />
    </div>
  );
}

export default TaskView;
