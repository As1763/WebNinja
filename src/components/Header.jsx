import React from 'react';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="logo">
        <h1>CodeNode</h1>
      </div>
      <div className="nav">
        <span style={{ color: 'var(--text-secondary)' }}>Welcome, Admin</span>
      </div>
    </header>
  );
};

export default Header;
