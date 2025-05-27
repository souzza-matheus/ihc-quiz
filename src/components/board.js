import Company from './company';
import PlayerAvatar from './PlayerAvatar';
import '../styles/Board.css';

const Board = ({ companies, playerPosition, onCompanyClick, companiesWithActiveProblems }) => {
  return (
    <div className="board">
      <PlayerAvatar position={playerPosition} />
      {companies.map(company => (
        <Company
          key={company.id}
          company={company}
          onClick={onCompanyClick}
          hasProblem={companiesWithActiveProblems.includes(company.id)}
        />
      ))}
      {}
      <svg className="board-paths">
        {}
        <line
          x1={companies[0].position.x + 20} y1={companies[0].position.y + 20}
          x2={companies[1].position.x + 20} y2={companies[1].position.y + 20}
          stroke="#ccc" strokeWidth="3"
        />
        <line
          x1={companies[1].position.x + 20} y1={companies[1].position.y + 20}
          x2={companies[2].position.x + 20} y2={companies[2].position.y + 20}
          stroke="#ccc" strokeWidth="3"
        />
         <line
          x1={companies[0].position.x + 20} y1={companies[0].position.y + 20}
          x2={companies[2].position.x + 20} y2={companies[2].position.y + 20}
          stroke="#ccc" strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default Board;