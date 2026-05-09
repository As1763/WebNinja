import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PublicPortal from './pages/PublicPortal';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import TaskView from './pages/TaskView';
import './index.css';

function AppContent() {
  const location = useLocation();
  const isTaskView = location.pathname.startsWith('/task/');

  return (
    <div className={isTaskView ? "task-page-root" : "portal-theme"}>
      <Routes>
        <Route path="/" element={<PublicPortal />} />
        <Route path="/task/:taskId" element={<TaskView />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
