import React, { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';
import Header from '../components/Header';
import TaskList from '../components/TaskList';

function PublicPortal() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleTaskSelect = (task) => setSelectedTask(task);
  const closeModal = () => setSelectedTask(null);

  return (
    <>
      <Header />
      <main>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Daily Student Tasks</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Browse and manage your assigned practice tasks below.</p>
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

      {/* Task Preview Modal - Renders HTML as live output */}
      {selectedTask && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel modal-fullscreen" onClick={e => e.stopPropagation()}>
            <div className="modal-topbar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{selectedTask.title}</h2>
                <span className={`task-difficulty difficulty-${selectedTask.difficulty.toLowerCase()}`}>
                  {selectedTask.difficulty}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="task-date">{selectedTask.date}</span>
                <button className="modal-close" onClick={closeModal} style={{ position: 'static' }}>×</button>
              </div>
            </div>
            {selectedTask.description && (
              <p style={{ padding: '0 1.5rem', color: 'var(--text-secondary)', margin: '0.5rem 0' }}>{selectedTask.description}</p>
            )}
            <div className="preview-container">
              <iframe
                srcDoc={selectedTask.content}
                title={selectedTask.title}
                className="preview-iframe"
                sandbox="allow-same-origin"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PublicPortal;
