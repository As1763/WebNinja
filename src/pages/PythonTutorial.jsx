import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { pythonSyllabus } from '../data/pythonSyllabus';

function PythonTutorial() {
  const [activeTab, setActiveTab] = useState(pythonSyllabus[0].id);

  // Automatically scroll to top of content when tab changes
  useEffect(() => {
    const contentArea = document.getElementById('tutorial-content');
    if (contentArea) {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const renderContent = () => {
    const activeModule = pythonSyllabus.find(m => m.id === activeTab);
    return activeModule ? activeModule.content : null;
  };

  return (
    <>
      <Header />
      <div className="tutorial-vibrant-theme">
        <div className="tutorial-container">
          {/* Sidebar Navigation */}
          <aside className="tutorial-sidebar glass-panel">
            <h3>Modules</h3>
            <nav>
              <ul className="tutorial-nav-list">
                {pythonSyllabus.map((module) => (
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
            <div key={activeTab} className="content-wrapper fade-in-up">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default PythonTutorial;
