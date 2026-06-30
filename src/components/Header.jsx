import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header glass-panel">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>CodeNode</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Daily Tasks
        </Link>
        <Link 
          to="/css-tutorial" 
          className={`nav-link ${location.pathname === '/css-tutorial' ? 'active' : ''}`}
        >
          CSS Syllabus
        </Link>
        <Link 
          to="/python-tutorial" 
          className={`nav-link ${location.pathname === '/python-tutorial' ? 'active' : ''}`}
        >
          Python Syllabus
        </Link>
      </div>
      <div className="user-profile">
        <span style={{ color: 'var(--text-secondary)' }}>Welcome, Ninja</span>
      </div>
    </header>
  );
};

export default Header;
