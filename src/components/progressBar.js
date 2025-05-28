import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ resolved, total }) => {
  const percentage = total > 0 ? (resolved / total) * 100 : 0;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      <span className="progress-bar-text">
        Progresso: {` (${percentage.toFixed(0)}%)`}
      </span>
    </div>
  );
};

export default ProgressBar;