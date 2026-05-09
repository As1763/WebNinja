import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';

function TaskView() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);

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

  // Auto-hide controls after 2 seconds of inactivity
  useEffect(() => {
    let timer;
    const resetTimer = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowControls(false), 2000);
    };
    timer = setTimeout(() => setShowControls(false), 2000);
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('scroll', resetTimer, true);
    window.addEventListener('touchstart', resetTimer);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('scroll', resetTimer, true);
      window.removeEventListener('touchstart', resetTimer);
    };
  }, []);

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
      {/* Floating Back Button */}
      <button 
        className={`fab-back ${showControls ? 'visible' : 'hidden'}`} 
        onClick={() => navigate('/')} 
        title="Back to Tasks"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      {/* Floating info pill */}
      <div 
        className={`floating-info ${showControls ? 'visible' : ''}`}
        onMouseEnter={() => setShowControls(true)}
      >
        <div className="fi-main">
          <span className="fi-title">{task.title}</span>
          <span className={`task-difficulty difficulty-${task.difficulty.toLowerCase()}`}>
            {task.difficulty}
          </span>
        </div>
      </div>

      {/* Hover zone */}
      <div className="top-hover-zone" onMouseEnter={() => setShowControls(true)} />

      {/* Full screen preview - srcDoc gives perfect original view */}
      <iframe
        srcDoc={task.content}
        title={task.title}
        className="fullscreen-iframe"
      />
    </div>
  );
}

export default TaskView;
