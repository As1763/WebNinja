import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { cssSyllabus } from '../data/cssSyllabus';

function CssTutorial() {
  const [activeTab, setActiveTab] = useState(cssSyllabus[0].id);

  // Automatically scroll to top of content when tab changes
  useEffect(() => {
    const contentArea = document.getElementById('tutorial-content');
    if (contentArea) {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const renderContent = () => {
    const activeModule = cssSyllabus.find(m => m.id === activeTab);
    return activeModule ? activeModule.content : null;
  };

  return (
    <>
      <Header />
      <div className="tutorial-container">
        {/* Sidebar Navigation */}
        <aside className="tutorial-sidebar glass-panel">
          <h3>Modules</h3>
          <nav>
            <ul className="tutorial-nav-list">
              {cssSyllabus.map((module) => (
                <li key={module.id}>
                  <button
                    className={`tutorial-nav-btn ${activeTab === module.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(module.id)}
                  >
                    {module.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="tutorial-main-content glass-panel" id="tutorial-content">
          <div className="content-wrapper">
            {renderContent()}
          </div>
        </main>
      </div>
    </>
  );
}

export default CssTutorial;
