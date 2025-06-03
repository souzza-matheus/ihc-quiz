import React from 'react';
import '../styles/SmallScreenWarning.css';

const SmallScreenWarning = () => {
  return (
    <div className="small-screen-warning-overlay">
      <div className="small-screen-warning-content">
        <h2>Aviso!</h2>
        <p>Este jogo foi projetado para ser jogado em telas maiores (desktops).</p>
        <p>Por favor, acesse em um dispositivo com uma largura de tela maior para uma melhor experiência.</p>
        <p>Largura mínima recomendada: 1600px.</p>
      </div>
    </div>
  );
};

export default SmallScreenWarning;
