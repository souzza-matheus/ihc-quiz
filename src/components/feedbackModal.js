import React from 'react';
import '../styles/FeedbackModal.css';

const FeedbackModal = ({ message, type }) => {
  return (
    <div className={`feedback-overlay ${type}`}>
      <div className="feedback-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default FeedbackModal;