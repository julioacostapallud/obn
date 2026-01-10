import { useState, useEffect, useRef } from 'react';
import './MedievalIntro.css';
import { medievalMusic } from '../utils/medievalMusic';

interface MedievalIntroProps {
  clueNumber: number;
  onComplete: () => void;
}

function MedievalIntro({ clueNumber, onComplete }: MedievalIntroProps) {
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Preparar el audio medieval
    medievalMusic.start();

    // Después de la animación inicial, mostrar el botón
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleContinue = () => {
    // Reproducir ambos sonidos juntos cuando el usuario presiona el botón
    medievalMusic.play();
    
    // Reproducir el sonido del access específico
    const accessSound = new Audio(`/sounds/access${clueNumber}.mp3`);
    accessSound.volume = 0.7;
    accessSound.play().catch((error) => {
      console.log('Error reproduciendo sonido del access:', error);
    });

    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className={`medieval-intro ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="medieval-intro-content">
        <div className="medieval-lord-image">
          <img src="/lordHome.png" alt="Lord QuiLiAc" />
        </div>
        <div className="medieval-title">⚜️ La Orden del Nuevo Territorio</div>
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

