import React, { useState } from 'react';
import './ThemeCard.css';

function ThemeCard({ theme, isChecked, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div className="theme-card">
      <div className="theme-header">
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        <h2 onClick={toggleExpand}>{theme.title}</h2>
      </div>
      <p className="theme-description">{theme.description}</p>
      {expanded && (
        <div className="theme-details">
          <h3>Policy Guidelines:</h3>
          <ul>
            {theme.policies.map((policy, index) => (
              <li key={index}>
                <strong>{policy.name}:</strong> {policy.guideline}
              </li>
            ))}
          </ul>
          <h3>Recommended Actions:</h3>
          <ul>
            {theme.recommendedActions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ThemeCard;
