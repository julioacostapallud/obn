import { useState, useEffect } from 'react';
import './MedievalIntro.css';

interface MedievalIntroProps {
  clueNumber: number;
  onComplete: () => void;
}

function MedievalIntro({ clueNumber, onComplete }: MedievalIntroProps) {
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Después de la animación inicial, mostrar el botón
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); // Mostrar botón después de 2 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 1000); // Esperar a que termine la animación de salida
  };

  return (
    <div className={`medieval-intro ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="medieval-intro-content">
        <div className="medieval-lord-image">
          <img src="/lord.png" alt="Lord QuiLiAc" />
        </div>
        <div className="medieval-title">⚜️ OPERACIÓN NUEVA BASE</div>
        <div className="medieval-clue-number">Pista #{clueNumber}</div>
        {showButton && (
          <button className="medieval-continue-button" onClick={handleContinue}>
            Continuar a la aventura
          </button>
        )}
      </div>
    </div>
  );
}

export default MedievalIntro;

