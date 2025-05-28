import { useState, useEffect, useCallback } from 'react';
import { gameData } from '../data/gameData';

const initializeCompanies = () => JSON.parse(JSON.stringify(gameData.companies));

const calculateTotalProblems = (companies) => {
  return companies.reduce((total, company) => total + company.problems.length, 0);
};

const countResolvedProblemsInState = (companies) => {
  return companies.reduce((count, company) => {
    return count + company.problems.filter(p => p.resolved).length;
  }, 0);
};

export const useGameLogic = () => {
  const [companies, setCompanies] = useState(initializeCompanies);
  const [playerPosition, setPlayerPosition] = useState(companies[0].position);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [companiesWithActiveProblems, setCompaniesWithActiveProblems] = useState([]);
  const [companiesFullyResolved, setCompaniesFullyResolved] = useState([]);
  const [score, setScore] = useState(0);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [isProblemActive, setIsProblemActive] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const [totalProblems, setTotalProblems] = useState(() => calculateTotalProblems(initializeCompanies()));
  const [resolvedProblemsCount, setResolvedProblemsCount] = useState(0);

  useEffect(() => {
    setResolvedProblemsCount(countResolvedProblemsInState(companies));
  }, [companies]);

  const showFeedback = useCallback((message, type, duration = null) => {
    setFeedback({ message, type });
    if (duration !== null) {
      setTimeout(() => setFeedback(null), duration);
    }
  }, []);

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
      showFeedback('Parabéns! Você resolveu todos os problemas de IHC!', 'correct');
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
  }, [companies, showFeedback]);

  useEffect(() => {
    if (!showIntroduction && !isProblemActive) {
      activateRandomProblem();
    }
  }, [showIntroduction, isProblemActive, activateRandomProblem]);

  const handleCompanyClick = useCallback((companyId) => {
    if (showIntroduction || activeQuiz) return;

    const selectedCompany = companies.find(c => c.id === companyId);
    if (!selectedCompany) return;

    setPlayerPosition(selectedCompany.position);

    const activeProblem = selectedCompany.problems.find(p => p.isActive && !p.resolved);
    if (activeProblem) {
      setTimeout(() => {
        setActiveQuiz({ companyId: selectedCompany.id, problem: activeProblem });
      }, 500);
    }
  }, [showIntroduction, activeQuiz, companies]);

  const handleAnswer = useCallback((isCorrect) => {
    const feedbackMessage = isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta!';
    const feedbackType = isCorrect ? 'correct' : 'incorrect';

    showFeedback(feedbackMessage, feedbackType, 1000);

    setTimeout(() => {
      if (isCorrect) {
        setScore(prevScore => prevScore + 100);
        setCompanies(prevCompanies => {
          const newCompanies = prevCompanies.map(company =>
            company.id === activeQuiz.companyId
              ? {
                  ...company,
                  problems: company.problems.map(p =>
                    p.id === activeQuiz.problem.id ? { ...p, resolved: true, isActive: false } : p
                  )
                }
              : company
          );
          return newCompanies;
        });

        const companyAfterResolution = companies.find(c => c.id === activeQuiz.companyId);
        const remainingUnresolvedProblems = companyAfterResolution.problems.filter(p => !p.resolved && p.id !== activeQuiz.problem.id);

        if (remainingUnresolvedProblems.length === 0) {
          setCompaniesFullyResolved(prev => [...new Set([...prev, activeQuiz.companyId])]);
          setCompaniesWithActiveProblems(prev => prev.filter(id => id !== activeQuiz.companyId));
        }

        setActiveQuiz(null);
        setIsProblemActive(false);
      }
    }, 1500);
  }, [activeQuiz, companies, showFeedback]);

  const handleQuizClose = useCallback(() => {
    setActiveQuiz(null);
  }, []);

  const handleStartGame = useCallback(() => {
    setShowIntroduction(false);
  }, []);

  return {
    companies,
    playerPosition,
    activeQuiz,
    companiesWithActiveProblems,
    companiesFullyResolved,
    score,
    showIntroduction,
    feedback,
    handleCompanyClick,
    handleAnswer,
    handleQuizClose,
    handleStartGame,
    totalProblems,
    resolvedProblemsCount,
  };
};