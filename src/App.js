import React, { useState } from 'react';
import Checklist from './components/Checklist';
import ProgressDonut from './components/ProgressDonut';
import securityThemes from './data';
import './App.css';

function App() {
  const [checkedThemes, setCheckedThemes] = useState({});

  const handleToggleTheme = (themeId) => {
    setCheckedThemes((prev) => ({ ...prev, [themeId]: !prev[themeId] }));
  };

  const completedCount = Object.values(checkedThemes).filter((v) => v).length;
  const totalCount = securityThemes.length;

  return (
    <div className="app-container">
      <header>
        <h1>Cloud Security Baseline Checker</h1>
        <p>
          Easily compare your cloud architecture against best‑in‑class security recommendations aggregated from AWS Well
          Architected, NIST 800, CCM, and MCSB.
        </p>
      </header>

      <section className="progress-section">
        <ProgressDonut completed={completedCount} total={totalCount} />
        <p>
          {completedCount} of {totalCount} themes implemented
        </p>
      </section>

      <Checklist themes={securityThemes} checkedThemes={checkedThemes} onToggleTheme={handleToggleTheme} />
    </div>
  );
}

export default App;
