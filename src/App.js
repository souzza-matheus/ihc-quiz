import  { useState, useEffect, useCallback } from 'react';
import Board from './components/board';
import QuizModal from './components/quizModal';
import { gameData } from './data/gameData';
import './styles/App.css';

const App = () => {
  const [companies, setCompanies] = useState(() =>
    JSON.parse(JSON.stringify(gameData.companies))
  );

  const [playerPosition, setPlayerPosition] = useState(companies[0].position);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [companiesWithActiveProblems, setCompaniesWithActiveProblems] = useState([]);
  const [score, setScore] = useState(0);

  const activateRandomProblem = useCallback(() => {
    const unresolvedCompanies = companies.filter(company =>
      company.problems.some(p => !p.resolved)
    );

    if (unresolvedCompanies.length === 0) {
      alert('Parabéns! Você resolveu todos os problemas de IHC!');
      return;
    }

    const randomCompany = unresolvedCompanies[Math.floor(Math.random() * unresolvedCompanies.length)];
    const unresolvedProblemsInCompany = randomCompany.problems.filter(p => !p.resolved);
    const randomProblem = unresolvedProblemsInCompany[Math.floor(Math.random() * unresolvedProblemsInCompany.length)];

    setCompanies(prevCompanies =>
      prevCompanies.map(company =>
        company.id === randomCompany.id
          ? {
              ...company,
              problems: company.problems.map(p =>
                p.id === randomProblem.id ? { ...p, isActive: true } : p
              )
            }
          : company
      )
    );

    setCompaniesWithActiveProblems(prev => [...new Set([...prev, randomCompany.id])]);
  }, [companies]);

  useEffect(() => {
    activateRandomProblem();
  }, [activateRandomProblem]);

  const handleCompanyClick = (companyId) => {
    const selectedCompany = companies.find(c => c.id === companyId);
    if (!selectedCompany) return;

    setPlayerPosition(selectedCompany.position);

    const activeProblem = selectedCompany.problems.find(p => p.isActive && !p.resolved);
    if (activeProblem) {
      setTimeout(() => {
        setActiveQuiz({ companyId: selectedCompany.id, problem: activeProblem });
      }, 500);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 100);
      setCompanies(prevCompanies =>
        prevCompanies.map(company =>
          company.id === activeQuiz.companyId
            ? {
                ...company,
                problems: company.problems.map(p =>
                  p.id === activeQuiz.problem.id ? { ...p, resolved: true, isActive: false } : p
                )
              }
            : company
        )
      );

      const companyAfterResolution = companies.find(c => c.id === activeQuiz.companyId);
      const remainingUnresolvedProblems = companyAfterResolution.problems.filter(p => !p.resolved && p.id !== activeQuiz.problem.id);

      if (remainingUnresolvedProblems.length === 0) {
        setCompaniesWithActiveProblems(prev => prev.filter(id => id !== activeQuiz.companyId));
      }
      
      setTimeout(() => {
        activateRandomProblem();
      }, 1000);
    }
  };

  const handleQuizClose = () => {
    setActiveQuiz(null);
  };

  return (
    <div className="app">
      <h1>IHC Quest: O Desafio da Usabilidade</h1>
      <div className="score">Pontuação: {score}</div>
      <Board
        companies={companies}
        playerPosition={playerPosition}
        onCompanyClick={handleCompanyClick}
        companiesWithActiveProblems={companiesWithActiveProblems}
      />
      {activeQuiz && (
        <QuizModal
          quiz={activeQuiz.problem}
          onAnswer={handleAnswer}
          onClose={handleQuizClose}
        />
      )}
    </div>
  );
};

export default App;