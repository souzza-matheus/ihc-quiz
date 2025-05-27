import React from 'react';
import '../styles/Company.css';

const Company = ({ company, onClick, hasProblem }) => {
  return (
    <div
      className="company"
      style={{ top: company.position.y, left: company.position.x }}
      onClick={() => onClick(company.id)}
      title={company.name}
    >
      <img src={company.image} alt={company.name} className="company-img-icon" />
      {hasProblem && <span className="exclamation">!</span>}
    </div>
  );
};

export default Company;