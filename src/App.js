import React from 'react';
import Board from './components/board';
import QuizModal from './components/quizModal';
import IntroductionModal from './components/introductionModal';
import FeedbackModal from './components/feedbackModal';
import ProgressBar from './components/progressBar';
import { useGameLogic } from './hooks/useGameLogic';
import './styles/App.css';

const App = () => {
  const {
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
    resolvedProblemsCount
  } = useGameLogic();

  return (
    <div className="app">
      {showIntroduction && <IntroductionModal onStartGame={handleStartGame} />}

      {!showIntroduction && (
        <>
          <ProgressBar resolved={resolvedProblemsCount} total={totalProblems} />
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

      {feedback && <FeedbackModal message={feedback.message} type={feedback.type} />}
    </div>
  );
};

export default App;
