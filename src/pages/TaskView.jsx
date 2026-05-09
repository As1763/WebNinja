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

  // Function to extract font-family from the task HTML/CSS
  const getFontUsed = (content) => {
    if (!content) return 'Standard';
    // Look for font-family in CSS or style attributes
    const match = content.match(/font-family:\s*['"]?([^'";,]+)/i);
    if (match && match[1]) {
      return match[1].trim().split(',')[0].replace(/['"]/g, '');
    }
    // Check for old school <font face="...">
    const fontTagMatch = content.match(/face=['"]?([^'"]+)/i);
    if (fontTagMatch && fontTagMatch[1]) {
      return fontTagMatch[1].trim();
    }
    return 'Default Sans';
  };

  return (
    <div className="task-fullscreen">
      {/* Floating Back Button - Auto hides */}
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

      {/* Floating info pill - Auto hides */}
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
        <div className="fi-divider"></div>
        <div className="fi-font">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
          <span>{getFontUsed(task.content)}</span>
        </div>
      </div>

      {/* Hover zone to bring back the info bar */}
      <div className="top-hover-zone" onMouseEnter={() => setShowControls(true)} />

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
