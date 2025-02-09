import React from 'react';
import ThemeCard from './ThemeCard';
import './Checklist.css';

function Checklist({ themes, checkedThemes, onToggleTheme }) {
  return (
    <div className="checklist">
      {themes.map((theme) => (
        <ThemeCard
          key={theme.id}
          theme={theme}
          isChecked={!!checkedThemes[theme.id]}
          onToggle={() => onToggleTheme(theme.id)}
        />
      ))}
    </div>
  );
}

export default Checklist;
