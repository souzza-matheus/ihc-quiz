import '../styles/Company.css';

const Company = ({ company, onClick, hasProblem }) => {
  return (
    <div
      className="company"
      style={{ top: company.position.y, left: company.position.x }}
      onClick={() => onClick(company.id)}
    >
      <span className="company-icon">{company.icon}</span>
      <span className="company-name">{company.name}</span>
      {hasProblem && <span className="exclamation">!</span>}
    </div>
  );
};

export default Company;