import React from 'react';
import '../styles/IntroductionModal.css'; // Vamos criar este CSS também

const IntroductionModal = ({ onStartGame }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content introduction-modal">
        <h2>Bem-vindo(a) ao IHC Quest: O Desafio da Usabilidade!</h2>
        <p>Você é um analista de Interação Humano-Computador (IHC) e sua missão é resolver problemas de usabilidade em diversas empresas pela cidade.</p>
        
        <h3>Como Jogar:</h3>
        <ul>
          <li>No tabuleiro, você verá várias empresas.</li>
          <li>Uma exclamação (<strong>!</strong>) ao lado de uma empresa indica que há um problema de IHC esperando por você.</li>
          <li>Clique na empresa com a exclamação para mover seu avatar até lá.</li>
          <li>Ao chegar, um quiz de múltipla escolha aparecerá. Leia o cenário e a pergunta com atenção!</li>
          <li>Escolha a melhor solução de IHC e envie sua resposta.</li>
          <li>Se acertar, você ganha pontos e o problema é resolvido! Um novo problema aparecerá em outra empresa.</li>
          <li>Se errar, você pode tentar novamente até acertar.</li>
          <li>Seu objetivo é resolver o máximo de problemas possível e se tornar o mestre da usabilidade!</li>
        </ul>
        
        <button onClick={onStartGame} className="start-game-button">
          Começar Jogo
        </button>
      </div>
    </div>
  );
};

export default IntroductionModal;