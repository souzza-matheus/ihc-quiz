import  { useState, useEffect, useCallback } from 'react';
import '../styles/QuizModal.css';

const QuizModal = ({ quiz, onAnswer, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setFeedback('');
    setAnsweredCorrectly(false);
  }, [quiz]); 

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const selected = quiz.options[selectedOption];
      if (selected.isCorrect) {
        setFeedback(selected.feedback || 'Correto!');
        setAnsweredCorrectly(true);
        onAnswer(true); 
      } else {
        setFeedback('Ops! Tente novamente.');
        onAnswer(false);
      }
    }
  };

  const handleCloseModal = () => {

    if (answeredCorrectly) {
      onClose();
    } else {

      alert('Você precisa resolver o problema para sair!');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Problema na Empresa</h3>
        <p className="scenario">{quiz.scenario}</p>
        <p className="question">{quiz.question}</p>
        <div className="options">
          {quiz.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => setSelectedOption(index)}
              disabled={answeredCorrectly} 
            >
              {option.text}
            </button>
          ))}
        </div>
        {!answeredCorrectly && (
          <button onClick={handleSubmit} disabled={selectedOption === null}>
            Enviar Resposta
          </button>
        )}
        {feedback && <p className={`feedback ${answeredCorrectly ? 'correct' : 'incorrect'}`}>{feedback}</p>}
        {answeredCorrectly && (
            <button onClick={handleCloseModal} className="close-button">
              Fechar
            </button>
        )}
      </div>
    </div>
  );
};

export default QuizModal;