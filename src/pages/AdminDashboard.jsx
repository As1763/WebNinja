import React, { useState, useEffect } from 'react';
import { ref, push, set, remove, get } from 'firebase/database';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Form State
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [difficulty, setDifficulty] = useState('Easy');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Check Auth
    const unsubscribe = auth?.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate('/login');
      } else {
        setUser(currentUser);
        fetchTasks();
      }
    });
    
    // Simulate auth bypass for UI building if auth isn't setup
    if (!auth) {
       console.log("No auth initialized. Rendering admin for setup purposes.");
       fetchTasks();
       setLoading(false);
    }
    
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [navigate]);

  async function fetchTasks() {
    if (!db) return;
    setLoading(true);
    try {
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
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
    setLoading(false);
  }

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!db) {
       alert("Firebase database not connected.");
       return;
    }
    
    try {
      const newTaskRef = push(ref(db, "tasks"));
      await set(newTaskRef, {
        title,
        date,
        difficulty,
        description,
        content,
        createdAt: Date.now()
      });
      // Reset form
      setTitle('');
      setDescription('');
      setContent('');
      
      // Refresh list
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task: " + error.message);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await remove(ref(db, `tasks/${id}`));
        fetchTasks();
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  const handleLogout = () => {
    if (auth) auth.signOut();
    navigate('/');
  };

  if (loading && auth) return <div className="loader-container"><div className="spinner"></div></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--accent-secondary)' }}>Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-secondary" onClick={() => navigate('/')}>View Public Portal</button>
          <button className="btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Add Task Form */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Upload New Task</h2>
          <form onSubmit={handleAddTask} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label>Task Title</label>
              <input className="form-input" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label>Date</label>
                <input type="date" className="form-input" value={date} onChange={e => setDate(e.target.value)} required />
              </div>
              <div style={{ flex: 1 }}>
                <label>Difficulty</label>
                <select className="form-input" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div>
              <label>Short Description</label>
              <textarea className="form-input" rows="2" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
            </div>

            <div>
              <label>Full Content / Instructions / Code</label>
              <textarea className="form-input" rows="8" value={content} onChange={e => setContent(e.target.value)} required></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Upload Task</button>
          </form>
        </div>

        {/* Task List Management */}
        <div className="glass-panel" style={{ padding: '2rem', maxHeight: '80vh', overflowY: 'auto' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Manage Tasks</h2>
          
          {tasks.length === 0 ? (
            <p style={{ color: 'var(--text-secondary)' }}>No tasks found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tasks.map(task => (
                <div key={task.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{task.title}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{task.date} • {task.difficulty}</span>
                  </div>
                  <button 
                    style={{ background: 'rgba(231, 76, 60, 0.2)', border: '1px solid #e74c3c', color: '#e74c3c', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
