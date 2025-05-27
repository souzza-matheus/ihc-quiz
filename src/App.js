import React, { useState, useEffect, useCallback } from 'react';
import Board from './components/board';
import QuizModal from './components/quizModal';
import IntroductionModal from './components/introductionModal';
import { gameData } from './data/gameData';
import './styles/App.css';

const App = () => {
  const [companies, setCompanies] = useState(() =>
    JSON.parse(JSON.stringify(gameData.companies))
  );

  const [playerPosition, setPlayerPosition] = useState(companies[0].position);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [companiesWithActiveProblems, setCompaniesWithActiveProblems] = useState([]);
  const [companiesFullyResolved, setCompaniesFullyResolved] = useState([]);
  const [score, setScore] = useState(0);
  const [showIntroduction, setShowIntroduction] = useState(true);

 
  const [isProblemActive, setIsProblemActive] = useState(false);

  const activateRandomProblem = useCallback(() => {
   
    setCompanies(prevCompanies =>
      prevCompanies.map(company => ({
        ...company,
        problems: company.problems.map(p => ({
          ...p,
          isActive: false 
        }))
      }))
    );
    setCompaniesWithActiveProblems([]); 

    const unresolvedCompanies = companies.filter(company =>
      company.problems.some(p => !p.resolved)
    );

    if (unresolvedCompanies.length === 0) {
      alert('Parabéns! Você resolveu todos os problemas de IHC!');
      setIsProblemActive(false);
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

    setCompaniesWithActiveProblems([randomCompany.id]); 
    setIsProblemActive(true); 
  }, [companies]);

  useEffect(() => {
    if (!showIntroduction && !isProblemActive) {
      activateRandomProblem();
    }
  }, [showIntroduction, isProblemActive, activateRandomProblem]);

  const handleCompanyClick = (companyId) => {
    if (showIntroduction) return;

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
        setCompaniesFullyResolved(prev => [...new Set([...prev, activeQuiz.companyId])]);
        setCompaniesWithActiveProblems(prev => prev.filter(id => id !== activeQuiz.companyId)); 
      }
      
      setActiveQuiz(null); 
      setIsProblemActive(false); 

    }
  };

  const handleQuizClose = () => {
    setActiveQuiz(null);
  };

  const handleStartGame = () => {
    setShowIntroduction(false);
  };

  return (
    <div className="app">
      {showIntroduction && <IntroductionModal onStartGame={handleStartGame} />}

      {!showIntroduction && (
        <>
          <h1>IHC Quest: O Desafio da Usabilidade</h1>
          <div className="score">Pontuação: {score}</div>
          <Board
            companies={companies}
            playerPosition={playerPosition}
            onCompanyClick={handleCompanyClick}
            companiesWithActiveProblems={companiesWithActiveProblems}
            companiesFullyResolved={companiesFullyResolved} 
          />
          {activeQuiz && (
            <QuizModal
              quiz={activeQuiz.problem}
              onAnswer={handleAnswer}
              onClose={handleQuizClose}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;