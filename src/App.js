import Board from './components/board';
import QuizModal from './components/quizModal';
import IntroductionModal from './components/introductionModal';
import FeedbackModal from './components/feedbackModal';
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
  } = useGameLogic();

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

      {feedback && <FeedbackModal message={feedback.message} type={feedback.type} />}
    </div>
  );
};

export default App;