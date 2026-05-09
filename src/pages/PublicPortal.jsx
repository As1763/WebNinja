import React, { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import TaskList from '../components/TaskList';

function PublicPortal() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!db) {
          setError("Firebase is not configured yet. Please configure firebase.js");
          setLoading(false);
          return;
        }

        const snapshot = await get(ref(db, "tasks"));
        const fetchedTasks = [];
        if (snapshot.exists()) {
          const data = snapshot.val();
          for (let id in data) {
            fetchedTasks.push({ id, ...data[id] });
          }
          fetchedTasks.sort((a, b) => b.createdAt - a.createdAt);
        }
        
        setTasks(fetchedTasks);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Could not connect to Firebase database. Check configuration.");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleTaskSelect = (task) => {
    navigate(`/task/${task.id}`);
  };

  return (
    <>
      <Header />
      <main>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>Daily Student Tasks</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Browse and manage your assigned practice tasks below.</p>
        </div>

        {error && <div className="error-banner"><p>{error}</p></div>}

        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading tasks from Database...</p>
          </div>
        ) : tasks.length === 0 && !error ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p>No tasks uploaded yet.</p>
          </div>
        ) : (
          <TaskList tasks={tasks} onTaskSelect={handleTaskSelect} />
        )}
      </main>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
}

export default PublicPortal;
