import React from 'react';
import Board from './components/board';
import QuizModal from './components/quizModal';
import IntroductionModal from './components/introductionModal';
import FeedbackModal from './components/feedbackModal';
import ProgressBar from './components/progressBar';
import { useGameLogic } from './hooks/useGameLogic';
import SmallScreenWarning from './components/smallScreenWarning';
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
    resolvedProblemsCount,
    isLargeScreen,
  } = useGameLogic();

  return (
    <div className="app">
      {!isLargeScreen ? (
        <SmallScreenWarning />
      ) : (
        <>
          {showIntroduction && <IntroductionModal onStartGame={handleStartGame} />}

          {!showIntroduction && (
            <>
              <h1>IHC Quest: O Desafio da Usabilidade</h1>
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
        </>
      )}
    </div>
  );
};

export default App;
