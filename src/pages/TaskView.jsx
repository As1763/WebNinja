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

  // Unified Auto-hide logic for all controls (Back button + Info pill)
  useEffect(() => {
    let timer;
    
    const resetTimer = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowControls(false);
      }, 2000); // Hide after 2 seconds
    };

    // Initial timer
    timer = setTimeout(() => setShowControls(false), 2000);

    // Activity listeners
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
    <div className="task-direct-view">
      {/* Floating Back Button - Auto hides */}
      <button 
        className={`fab-back ${showControls ? 'visible' : 'hidden'}`} 
        onClick={() => navigate('/')} 
        title="Back to Tasks"
        style={{ zIndex: 10002 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      {/* Floating info pill - Auto hides */}
      <div 
        className={`floating-info ${showControls ? 'visible' : ''}`}
        onMouseEnter={() => setShowControls(true)}
        style={{ zIndex: 10002 }}
      >
        <div className="fi-main">
          <span className="fi-title">{task.title}</span>
          <span className={`task-difficulty difficulty-${task.difficulty.toLowerCase()}`}>
            {task.difficulty}
          </span>
        </div>
      </div>

      {/* Hover zone to bring back the info bar */}
      <div className="top-hover-zone" onMouseEnter={() => setShowControls(true)} style={{ zIndex: 10001 }} />

      {/* Direct HTML Rendering - This allows WhatFont extension to work! */}
      <div 
        className="task-rendered-content"
        dangerouslySetInnerHTML={{ __html: task.content }}
      />
    </div>
  );
}

export default TaskView;
